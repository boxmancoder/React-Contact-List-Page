import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ContactList.css";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://playground.4geeks.com/apis/fake/contact/agenda/httpscammy",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await resp.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (contactId) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchData(); // Re-fetch the contacts after deletion
    })
    .catch(error => {
      console.error("Error deleting contact:", error);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {contacts.map((contact) => (
        <Card key={contact.id} className="mb-3 contact-card">
          <Card.Body>
            <Card.Title>{contact.full_name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faEnvelope} /> {contact.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faPhone} /> {contact.phone}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {contact.address}
              </ListGroup.Item>
            </ListGroup>
            <div className="d-flex justify-content-end">
            <Button variant="outline-primary" as={Link} to={`/edit/${contact.id}`}>
               <FontAwesomeIcon icon={faPencil} />
              </Button>
              <Button variant="outline-danger" onClick={() => handleDelete(contact.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;