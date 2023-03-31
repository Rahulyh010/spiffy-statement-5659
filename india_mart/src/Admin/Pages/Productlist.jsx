import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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

  const deleteData = async(id) => {
    await fetch(`https://alok-verma-rct.onrender.com/beautyface/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    fetchData();
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='parent' style={{marginTop:"15px"}}>
      <div className='options'>
        <div>
          <Link to="/adminAddProduct"><button className='add-product'>ADD PRODUCT</button></Link>
        </div>
        <div>
          <select className='category'  placeholder='H'>
            <option>SELECT CATEGORY</option>
            <option>HELLO</option>
          </select>
        </div>
      </div>
      <br/>
      <br/>
      <div className="products">
        {
          productData?.map((e)=>{
            return(
              <Productcard key={e.id} {...e} deleteData={deleteData}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Productlist