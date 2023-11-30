import React, { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import "../../styles/contact-list.css";

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

  return (
    <div className="container">
      {contacts.map((contact) => {
        return (
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <img
                src="https://yt3.googleusercontent.com/By7y3DgW6vAJEVRzzA1-xQCgklqiRyP3ZQA-u1I6kdckEryMmTK6mr7alRfklIO1Jrp2t3_A=s900-c-k-c0x00ffffff-no-rj"
                width="150px"
              />
            </div>
            <div className="p-2">
              <Stack>
                <div className="p-2">{contact.full_name}</div>
                <div className="p-2">{contact.address}</div>
                <div className="p-2">{contact.phone}</div>
                <div className="p-2">{contact.email}</div>
              </Stack>
            </div>
            <div className="p-2 icons">
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className="p-2 icons">
              <FontAwesomeIcon
                icon={faTrashCan}
                className="trash-can"
                onClick={() => {
                  fetch(
                    `https://playground.4geeks.com/apis/fake/contact/${contact.id}`,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  ).then(() => {
                    fetchData();
                  });
                }}
              />
            </div>
          </Stack>
        );
      })}
    </div>
  );
};

export default ContactList;