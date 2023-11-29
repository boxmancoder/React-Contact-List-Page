import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";
import "../../styles/ContactList.css"; 

export const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts();
    }, [actions]);

    return (
        <div className="container">
            <div className="contact-list-header">
                <Link to="/add">
                    <button className="btn btn-primary">Add New Contact</button>
                </Link>
            </div>
            <div className="contact-grid">
                {store.contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};