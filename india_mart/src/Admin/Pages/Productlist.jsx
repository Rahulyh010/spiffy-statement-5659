import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Productcard from '../Component/Productcard';
import "../Css/Productlist.css"
import Sidebar from '../Component/Sidebar';

const Productlist = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    await fetch(`https://cooperative-bass-toga.cyclic.app/admin`,{
      headers:{
        "Authorization":`${localStorage.getItem("adminID")}`
      }
    })
    .then((res)=>res.json())
    .then((res)=>setProductData(res))
    .catch((err)=>console.log(err))
  }

  const deleteData = async(id) => {
    await fetch(`https://cooperative-bass-toga.cyclic.app/admin/deletProduct/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`${localStorage.getItem("adminID")}`
      },
    })
    fetchData();
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <Sidebar/>
      <div className='parent' style={{marginTop:"15px"}}>
        <div className='options'>
          <div>
            <Link to="/adminAddProduct"><button className='add-product'>ADD PRODUCT</button></Link>
          </div>
          {/* <div>
            <select className='category'  placeholder='H'>
              <option>SELECT CATEGORY</option>
              <option>HELLO</option>
            </select>
          </div> */}
        </div>
        <br/>
        <br/>
        <div className="products">
          {
            productData?.map((e)=>{
              return(
                <Productcard key={e._id} {...e} deleteData={deleteData}/>
              )
            })
          }
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Productlist