import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const history = useHistory();
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(contact);
        history.push("/"); // Redirect to contact list view after adding contact
    };

    return (
        <div className="container">
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        onChange={handleChange}
                        value={contact.full_name}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={contact.email}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        onChange={handleChange}
                        value={contact.phone}
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        onChange={handleChange}
                        value={contact.address}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default AddContact;