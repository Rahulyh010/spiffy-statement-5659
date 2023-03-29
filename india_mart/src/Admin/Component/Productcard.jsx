import React from 'react'
import styles from "../Css/Productcard.module.css"

const Productcard = (data) => {
    console.log(data)
  return (
    <div className={styles.container}>
        <div>
            <img src={data.image}/>
        </div>
    </div>
  )
}

export default Productcard