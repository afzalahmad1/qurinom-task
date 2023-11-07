import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios';
const AddProduct = () => {
    const [product,setProduct] = useState({
        name: "",
        catagory: "",
        price: "",
        rating: ""
    });
    const handleProduct = (e)=> {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        // console.log(product);
    }
    const addProduct = async ()=>{
        try {
            const res = await axios.post(`https://qurinom.onrender.com/api/addProduct`,product)
            console.log(res)
            alert(res.data.message)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
       <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">Add New Product</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            {/* <img src={user_icon} alt="user-icon" /> */}
            <input
            className="inp"
              type="text"
              placeholder="Name"
              onChange={handleProduct}
              name="name"
              required
            />
          </div>
          <div className="input">
            {/* <img src={email_icon} alt="email-icon" /> */}
            <input
            className='inp'
              type="text"
              placeholder="Catagory"
              onChange={handleProduct}
              name="catagory"
              required
            />
          </div>
          <div className="input">
            {/* <img src={password_icon} alt="password-icon" /> */}
            <input
            className="inp"
              type="number"
              placeholder="Price"
              onChange={handleProduct}
              name="price"
              required
            />
          </div>
          <div className="input">
            {/* <img src={password_icon} alt="password-icon" /> */}
            <input
            className="inp"
              type="number"
              placeholder="Rating"
              onChange={handleProduct}
              name="rating"
              required
            />
          </div>
        </div>
        
        <div className="submit-container">
          <div className="submit" onClick={addProduct} >
            Add Product
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddProduct
