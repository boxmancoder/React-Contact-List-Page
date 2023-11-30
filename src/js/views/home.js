import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactList from "../component/contact-list";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <ContactList />
      <Link to="/add">
        <button>Add Contact</button>
      </Link>
    </div>
  );
};