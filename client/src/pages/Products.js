import React, { useEffect, useState } from "react";
import "./styles.css";
import Aside from "../components/Products/Aside";
import Main from "../components/Products/Main";
import axios from "axios";
const Products = () => {
  const [productArr, setProductArr] = useState();
  const [search, setSearch] = useState("");
  const [filteredData,setFilteredData] = useState([])

  let token = localStorage.getItem("token");
  console.log(token);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/getAll`);
        console.log(res.data.products);
        setProductArr(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    var arr = productArr?.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
  });
  setFilteredData(arr)
  },[search])


  function handleColorChange(val){
    let newArr = productArr.filter((item)=>{
      let colorArr = item.color;
      // console.log(colorArr);
      return colorArr.includes(val);
  }) 
  // console.log(newArr);
  setFilteredData(newArr)
  }

  function handleCatagoryChange(val){

    if(val === 'all'){
      setFilteredData(productArr)
      return
    }
    let newArr = productArr.filter((item)=>{
      return item.catagory.includes(val);
  }) 
  // console.log(newArr);
  setFilteredData(newArr)
  }

  function handleSizeChange(val){
    let newArr = productArr.filter((item)=>{
      let sizeArr = item.size;
      // console.log(colorArr);
      return sizeArr.includes(val);
  }) 
  // console.log(newArr);
  setFilteredData(newArr)
  }

  if(!token){
    return <h1 style={{textAlign:"center"}}>You Are Not Authorized|</h1>
  }
  return (
    <div>
      <div className="main">
        <Aside handleColorChange={handleColorChange} handleSizeChange={handleSizeChange} />
        <Main
          productArr={(search || filteredData ) ? filteredData : productArr}
          search={search}
          setSearch={setSearch}
          handleCatagoryChange={handleCatagoryChange}
        />
      </div> 
    </div>
  );
};

export default Products;
