import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import "../../styles/AddContact.css";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({ variant: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://playground.4geeks.com/apis/fake/contact/", {
      method: "POST",
      body: JSON.stringify({
        full_name: name,
        email: email,
        phone: phone,
        address: address,
        agenda_slug: "httpscammy",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Set success message
      setAlertContent({ variant: 'success', message: 'Contact saved successfully!' });
      setShowAlert(true);
      // Optionally reset form fields here
    })
    .catch((error) => {
      // Set error message
      setAlertContent({ variant: 'danger', message: 'Failed to save contact!' });
      setShowAlert(true);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form className="w-100 p-3" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Add a new contact</h1>
        
        {/* Add an Alert component to show the popup message */}
        {showAlert && (
          <Alert variant={alertContent.variant} onClose={() => setShowAlert(false)} dismissible>
            {alertContent.message}
          </Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First & Last name" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
        </Form.Group>
        
        <div className="text-center">
          <Button variant="primary" size="lg" type="submit">
            Save
          </Button>
        </div>
        
        <div className="text-center mt-3">
          <Link to="/">
            <Button variant="secondary" size="lg">Return to Contact List</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AddContact;