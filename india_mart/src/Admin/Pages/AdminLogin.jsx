import React, { useState } from 'react'
import styles from "../Css/AdminLogin.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleClick =() => {
    console.log(text)
    axios.get(`http://localhost:8080/admin`,{
      headers:{
        Authorization:`${text}`
      }
    }).then((res)=>{
      console.log(res)
      localStorage.setItem("adminID",text)
      navigate("/admin")
    })
    .catch((err)=>{
      alert(`${err.response.data.msg}`)
      console.log(err)
    })
  }
  return (
    <div className={styles.adminlogin}>
        <div className={styles.adminloginform}>
            <input className={styles.adminidinput} value={text} onChange={(e)=>setText(e.target.value)}/><br/><br/>
            <center><button className={styles.adminidinputButton} onClick={handleClick}>Admin</button></center>
        </div>
    </div>
  )
}

export default AdminLogin