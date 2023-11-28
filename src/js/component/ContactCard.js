import React from 'react';

const ContactCard = ({ contact }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{contact.full_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.phone}</h6>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.address}</p>
                {/* Add buttons or links for editing and deleting here */}
            </div>
        </div>
    );
};

export default ContactCard;