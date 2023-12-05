import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const EditContact = () => {
    const { contactId } = useParams();
  const navigate = useNavigate();
  // Assuming your contact data structure matches the keys below
  const [contact, setContact] = useState({
    full_name: '', // Make sure these keys match the contact object from your API
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.contact) {
          setContact(data.contact);
        }
      })
      .catch(error => console.error('Error:', error));
  }, [contactId]);

  
  const handleUpdate = (e) => {
    e.preventDefault();
    // Send a PUT request to update the contact
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        full_name: contact.full_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      navigate('/'); // Go back to the contact list after successful update
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mt-5">
      <h2>Update Contact</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            value={contact.full_name}
            onChange={e => setContact({ ...contact, full_name: e.target.value })}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={contact.email}
            onChange={e => setContact({ ...contact, email: e.target.value })}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={contact.phone}
            onChange={e => setContact({ ...contact, phone: e.target.value })}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={contact.address}
            onChange={e => setContact({ ...contact, address: e.target.value })}
          />
        </Form.Group>
  
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">Update Contact</Button>
          <Link to="/" className="btn btn-secondary">Cancel</Link>
        </div>
      </Form>
    </div>
  );
};

export default EditContact;