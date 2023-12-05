import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactList from "../component/ContactList";
import Button from "react-bootstrap/Button";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <div className="d-flex justify-content-center">
        <Link to="/add" className="d-inline-block mb-4">
          <Button variant="primary" size="lg">Add New Contact</Button>
        </Link>
      </div>
      <ContactList />
    </div>
  );
};