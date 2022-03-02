import React from 'react';
import '../components/FormAutorization.css'
import { useState, useEffect } from 'react';

export default function FormAutorization({ xxx } ) {

  const [loginData, setLoginData] = useState({
    username: null,
    password: null
  })
  
  useEffect(() => {

  });



  function getLoginData(target) {
    if (target.name === "name") {
      let x = { ...loginData, username:target.value};
      setLoginData(x);
    }

    if (target.name === "password") {
      //временная переменная X
      let x = { ...loginData, password: target.value};
      setLoginData(x);
    }
  }


  function checkOfInputs(target) {
    (target.value.length === 0)
      && alert('поля должны быть заполнены')
  }




  return (
    <>
      <form onSubmit={(e) => xxx(e, loginData)} className="form-autorization">
        <label className="form-autorization__item">
          <p className="form-autorization__text">Имя пользователя</p>
          <input
            type="text"
            name="name"
            placeholder="только буквы"
            className="form-autorization__input"
            onChange={(e) => getLoginData(e.target)}
            onBlur={(e) => checkOfInputs(e.target)}
          />
        </label>

        <label className="form-autorization__item">
          <p className="form-autorization__text">Пароль</p>
          <input
            type="text"
            name="password"
            placeholder="5 цифр"
            className="form-autorization__input"
            onChange={(e) => getLoginData(e.target)}
            onBlur={(e) => checkOfInputs(e.target)}
          />
        </label>

        <input
          type="submit"
          className="form-autorization__submit"
          value="Вход"
        />
      </form>
    </>
  );
}
