import React from 'react'
import UploadImage from '../Component/UploadImage';
import styles from '../Css/AddProduct.module.css'
import axios from 'axios';
import Sidebar from "../Component/Sidebar"
import { useParams } from "react-router-dom";

const Updateproduct = () => {
    const {id} = useParams();
  const [productdata, setData] = React.useState({
    id:Date.now(),
    image: "",
    title: "",
    price: "",
    reviews: {
      rate: "",
      count: "",
    },
    discount: "",
    description: "",
  });

  const onInputChange = (e) => {
    let a = e.target.value;
    let b = e.target.name;
    if (e.target.type == "number") {
      a = +a;
    }
    setData({ ...productdata, [b]: a });
  };

  const handleUpdate = async (event) =>{
    event.preventDefault()
    if (
      productdata.title &&
      productdata.image &&
      productdata.reviews.rate &&
      productdata.price
    ) {
      try {
        let res = await fetch(`http://localhost:8080/admin/editproduct/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`${localStorage.getItem("adminID")}`
          },
          body: JSON.stringify(productdata),
        });
      } catch (err) {
        alert("Facing some issues please try again");
        return;
      }
      alert("Product Updated Successfully");
      window.location.reload();
    } else {
      alert("Fill the data properly");
    }
  }

  const fetchSingleProduct = async (id) => {
    await axios
        .get(`http://localhost:8080/admin/${id}`,{
          headers:{
            Authorization:`${localStorage.getItem("adminID")}`
          }
        })
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    }

    React.useEffect(()=>{
        fetchSingleProduct(id)
    },[]);

  return (
    <div>
      <Sidebar/>
      <div className={styles.container}>
        <div className={styles.blurr}>
          <center>
            <p
              // size={{
              //   base: "md",
              //   sm: "lg",
              //   md: "lg",
              //   lg: "lg",
              //   xl: "lg",
              //   "2xl": "xl",
              // }}
              style={{ marginTop: "25px", marginBottom: "20px" }}
            >
              ADD NEW PRODUCT
            </p>
          </center>
          <div className={styles.table}>
            <div className={styles.form}>
              <form onSubmit={handleUpdate}>
                <label>Title</label><br/>
                <input name="title" value={productdata.title} type="text" onChange={onInputChange}/><br/>
                <label>Price</label><br/>
                <input name="price" value={productdata.price} type="number" onChange={onInputChange}/><br/>
                <label>Discount</label><br/>
                <input name="discount" value={productdata.discount} type="number" onChange={onInputChange}/><br/>
                <label>Reviews</label><br/>
                <input disabled name="reviews" value={productdata.reviews.rate} type="text" onChange={onInputChange}/><br/>
                <label>Product Description</label><br/>
                <textarea name="description" value={productdata.description} type="text" onChange={onInputChange}/><br/><br/>
                <input type="submit" className={styles.add} value={"Update Product"}/>
              </form>
            </div>
            <div>
              <UploadImage product={productdata} img={productdata?.image}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updateproduct