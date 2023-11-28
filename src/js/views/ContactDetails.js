import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactDetails = () => {
    const { store } = useContext(Context);
    const { id } = useParams(); // This assumes you're using React Router's useParams hook
    const contact = store.contacts.find(c => c.id === parseInt(id));

    return (
        <div className="container">
            {contact ? (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contact.full_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.phone}</h6>
                        <p className="card-text">{contact.email}</p>
                        <p className="card-text">{contact.address}</p>
                        {/* Add any additional details here */}
                    </div>
                </div>
            ) : (
                <p>Contact not found</p>
            )}
        </div>
    );
};

export default ContactDetails;