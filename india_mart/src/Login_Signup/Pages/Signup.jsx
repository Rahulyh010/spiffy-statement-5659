import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      name: name,
      email: email,
      password: password,
      city: city,
    };
    // console.log(payload);
    fetch(`http://localhost:8080/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res)=>alert("User Registered Successfully"))
      .then((res)=>navigate("/login"))
      
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.signup_box}>
        <div className={styles.signup_main_container}>
          <h1 className={styles.reg}>Register</h1>
          <div className={styles.signup_container}>
            <div className={styles.input_space}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className={styles.input_space}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <button className={styles.praButton} onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className={styles.login_link}>
            Already a member? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
