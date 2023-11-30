import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../../styles/add-contact.css";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="container">
      <h1 className="header">Add a new contact</h1>
      <p>Full Name</p>
      <input
        type="text"
        onChange={(evt) => setName(evt.target.value)}
        value={name}
        placeholder="Full name"
      />
      <p>Email</p>
      <input
        type="text"
        onChange={(evt) => setEmail(evt.target.value)}
        value={email}
        placeholder="Enter Email"
      />
      <p>Phone</p>
      <input
        type="text"
        onChange={(evt) => setPhone(evt.target.value)}
        value={phone}
        placeholder="Enter Phone Number"
      />
      <p>Address</p>
      <input
        type="text"
        onChange={(evt) => setAddress(evt.target.value)}
        value={address}
        placeholder="Enter Address"
      />
      <br />
      <Button
        onClick={() => {
          console.log("adam is a BITCH<3");
          fetch("https://playground.4geeks.com/apis/fake/contact", {
            method: "POST",
            body: JSON.stringify({
              full_name: name,
              email,
              phone,
              address,
              agenda_slug: "httpscammy",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
        variant="primary"
      >
        save
      </Button>
      <br />
      <Link to="/">
        <button className="goback-button">Go back to contact-list</button>
      </Link>
    </div>
  );
};

export default AddContact;