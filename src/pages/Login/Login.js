import React, { useState, useEffect } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

import Welcome from "../../components/Welcome/Welcome";
import Button from "../../components/Button/Button";
import Inputs from "../../components/Inputs/Inputs";
import Logo from "../../images/logo.png";

import PropTypes from "prop-types";

const Login = (props) => {
  const [form, setForm] = useState({});
  const [isPassword, setIsPassword] = useState(true);

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  }

  const navigate = useNavigate();
  function handleClick() {
    if (form.user === "admin" && form.password === "admin") {
      localStorage.setItem("isLogged", true);
      navigate("/home");
    } else {
      document.getElementById("form-error").style.visibility = "visible";
    }
  }

  function togglePassword() {
    setIsPassword(!isPassword);
    document.getElementById("togglePassword").classList.toggle("fa-eye-slash");
  }

  useEffect(() => {
    document.title = "Compass.UOL | Login"
  },[])
  return (
    <div className="login">
      <div className="left-login">
        <img src={Logo} alt="compass logo" id="compass-logo-left" />
        <Welcome />
        <h2>Login</h2>
        <Inputs
          placeholder="Usuário"
          className="user-input"
          id="user"
          onChange={handleChange}
          type="text"
        />
        <div className="container-password">
          <input
            type={isPassword ? "password" : "text"}
            placeholder="Senha"
            className="pw-input"
            onChange={handleChange}
            id="password"
          />
          <i
            onClick={togglePassword}
            class="far fa-eye"
            id="togglePassword"
          ></i>
        </div>
        <span id="form-error">{props.spanText}</span>
        <Button onClick={handleClick} />
      </div>
      <div className="right-login">
        <img src={Logo} alt="compass logo" id="compass-logo-right" />
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  spanText: PropTypes.string,
};

Login.defaultProps = {
  spanText: "Ops, usuário ou senha inválidos. Tente novamente!",
};
