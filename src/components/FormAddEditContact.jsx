import React from "react";
import { useState, useEffect } from "react";

export default function FormAddEditContact() {
  const [newUser, setNewUser] = useState(null);

  function getNewUser(target) {
    if (target.name === "name") {
      let x = { ...newUser, name: target.value };
      setNewUser(x);
    }

    if (target.name === "email") {
      //временная переменная X
      let x = { ...newUser, email: target.value };
      setNewUser(x);
    }
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

  function editContact(id) {}

  function checkOfInputs(target) {
    target.value.length === 0 && alert("поля должны быть заполнены");
  }

  return (
    <>
      <form>
        <input
          name="name"
          onBlur={(e) => checkOfInputs(e.target)}
          onChange={(e) => getNewUser(e.target)}
        />

        <input
          name="email"
          onBlur={(e) => checkOfInputs(e.target)}
          onChange={(e) => getNewUser(e.target)}
        />

        <button onClick={(e) => addContact(e, newUser)}>Add new</button>
      </form>
    </>
  );
}
