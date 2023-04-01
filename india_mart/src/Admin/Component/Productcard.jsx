import React from 'react'
import styles from "../Css/Productcard.module.css"
import { Link } from 'react-router-dom'

const Productcard = (data) => {
  return (
    <div className={styles.container}>
        <div>
          <div className={styles.image}>
              <img src={data.image}/>
          </div>
          <div className={styles.title}>
            <h3>{data.title}</h3>
          </div>
          <div className={styles.price}>
            <p>₹ {data.price}</p>
          </div>
        </div>
        <hr/>
        <div>
          <div className={styles.update}>
            <Link to={`/adminUpdateProduct/${data.id}`}><button>Update</button></Link>
          </div>
          <div className={styles.delete}>
            <button onClick={()=>data.deleteData(data.id)}>Delete</button>
          </div>
        </div>
    </div>
  )
}

export default Productcard