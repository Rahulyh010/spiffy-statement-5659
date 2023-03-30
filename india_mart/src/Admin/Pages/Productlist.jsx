import React, { useEffect, useState } from 'react'
import Productcard from '../Component/Productcard';
import "../Css/Productlist.css"

const Productlist = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    await fetch("https://alok-verma-rct.onrender.com/beautyface")
    .then((res)=>res.json())
    .then((res)=>setProductData(res))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div style={{marginTop:"15px"}}>
      <div className='options'>
        <div>
          <button className='add-product'>ADD PRODUCT</button>
        </div>
        <div>
          <select className='category'  placeholder='H'>
            <option>SELECT CATEGORY</option>
            <option>HELLO</option>
          </select>
        </div>
      </div>
      <div>
        {
          productData?.map((e)=>{
            return(
              <Productcard key={e.id} {...e}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Productlist