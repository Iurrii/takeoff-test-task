import "./App.css";
import { useState, useEffect } from "react";

import FormAutorization from "./components/FormAutorization";
import ListOfContacts from "./components/ListOfContacts";

function App() {
  const [contactsData, setContactsData] = useState(null);
  const [isAuthorized, setIsAutorized] = useState(true);
  const [userCurrent, setUserCurrent] = useState({
    username: null,
    password: null
  })

  useEffect(() => {
    // getAccess();
  }, [])

  useEffect(() => {
    getContactsData();
  }, [contactsData]);


  function getAccess(e, userData) {
    fetch("http://localhost:3005/users")
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          if (
            item.name === userData.username &&
            item.password === userData.password
          ) {
            // setIsAutorized(true);
            getContactsData();
          }
        });
      })
      .catch((error) => console.log(error.message));
    e.preventDefault();
  }




  function getContactsData() {
    fetch("http://localhost:3005/contacts")
      .then(response => response.json())
      .then((data) => {
        setContactsData(data);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="App">
      {isAuthorized ? (
        <ListOfContacts contactsData={contactsData} />
      ) : (
        <FormAutorization xxx={getAccess} />
      )}
    </div>
  );
}

export default App;
