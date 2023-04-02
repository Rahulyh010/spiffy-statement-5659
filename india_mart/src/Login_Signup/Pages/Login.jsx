import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    // console.log(payload);
    fetch(`https://cooperative-bass-toga.cyclic.app/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      //   .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        console.log(localStorage.getItem("token"));
        navigate("/");
      })
      .then((res)=>alert("User Login Successfully"))
      .catch((err) => {
        console.log(err);
        alert("fill correct  details");
      });
  };

  return (
    <>
      <div className={styles.signup_box}>
        <div className={styles.signup_main_container}>
          <h1 className={styles.reg}>Login</h1>
          <div className={styles.signup_container}>
            <div className={styles.input_space}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_space}>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.praButton} onClick={handleSubmit}>
              Login
            </button>

            <div className="login_link">
              <br />
              Not a member ? 
              <Link to="/signup">  Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
