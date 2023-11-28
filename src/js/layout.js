import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { AddContact } from "./views/AddContact"; // Make sure this is the correct import for your AddContact view
import { ContactList } from "./views/ContactList"; // Make sure this is the correct import for your ContactList view
import { ContactDetails } from "./views/ContactDetails"; // Make sure this is the correct import for your ContactDetails view
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ContactList />} /> // Updated to ContactList
                        <Route path="/add" element={<AddContact />} /> // Route for AddContact view
                        <Route path="/contact/:id" element={<ContactDetails />} /> // Route for ContactDetails view
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);