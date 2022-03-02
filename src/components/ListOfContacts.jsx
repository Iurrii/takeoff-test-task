import React from "react";
import "../components/ListOfContacts.css";
import { useState, useEffect } from "react";

export default function ListOfContacts({ contactsData }) {
  const [contacts, setContacts] = useState(null);
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    setContacts(contactsData);
  }, [contactsData]);

  function deleteContact(id) {
    fetch("http://localhost:3005/contacts/" + id, {
      method: "DELETE",
    });
  }

  // function editingContact(id) {
  //   if (window.confirm("Данные были изменены, сохранить изменения?")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  function saveContact(id) {
    contacts.map((contact) => {
      if (contact.id == id) {
      }
    });
  }

  function addContact(e, newUser) {
    newUser != null &&
      fetch("http://localhost:3005/contacts/", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
    e.preventDefault();
  }



  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => {
            return (
              <tr
                key={contact.id}
                id={contact.id}
                // onBlur={(e) => editingContact(e.target.id)}
              >
                <td>
                  <input
                    name="name"
                    id={contact.id}
                    value={contacts
                      .map((item) => {
                        if (item.id == contact.id) {
                          return item.name;
                        }
                      })
                      .join("")}
                  />
                </td>

                <td>
                  <input
                    name="email"
                    value={contacts
                      .map((item) => {
                        if (item.id == contact.id) {
                          return item.email;
                        }
                      })
                      .join("")}
                  />
                </td>

                <td>
                  <button
                    id={contact.id}
                    onClick={(e) => deleteContact(e.target.id)}
                  >
                    DEL
                  </button>

                  {/* <button
                    id={contact.id}
                    onClick={(e) => editingContact(e.target.id)}
                  >
                    SAVE
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={(e) => console.log(555)}>ADD CONTACT</button>
      </div>
    </>
  );
}
