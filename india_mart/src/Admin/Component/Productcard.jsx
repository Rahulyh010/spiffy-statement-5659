import React from 'react'
import styles from "../Css/Productcard.module.css"

const Productcard = (data) => {
    console.log(data)
  return (
    <div className={styles.container}>
        <div>
          <div className={styles.image}>
              <img src={data.image}/>
          </div>
          <div className={styles.title}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles.price}>
            <p>₹ {data.price}</p>
          </div>
        </div>
        <div>
          <hr/>
          <div className={styles.button}>
            <button>Update</button>
          </div>
        </div>
    </div>
  )
}

export default Productcard