import React from "react";
import "./styles.css";
import Cat from "../../assets/cat.jpg";
const Main = ({ productArr, search, setSearch , handleCatagoryChange}) => {
  return (
    <div className="main-content">
      <input
        type="text"
        placeholder="Search By Name"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filters">
        <div className="filter active" onClick={()=>handleCatagoryChange("all")}>
          All
        </div>
        <div className="filter" onClick={()=>handleCatagoryChange("mens")}>
          Mens
        </div>
        <div className="filter" onClick={()=>handleCatagoryChange("womens")}>
          Womens
        </div>
        <div className="filter" onClick={()=>handleCatagoryChange("jewellery")}>
          Jewellery
        </div>
        <div className="filter" onClick={()=>handleCatagoryChange("electronics")}>
          Electronics
        </div>
      </div>
      <div className="items">
        {productArr &&
          productArr.map((item) => {
            return (
              <div className="item" key={item._id}>
                <img src={Cat} alt="Item" />
                <div className="info">
                  <div className="name">Name: {item.name}</div>
                  <div className="catagory">catagory: {item.catagory}</div>

                  <div className="row">
                    <div className="price" id="price">
                      ${item.price}
                    </div>
                    <div className="sized">{item.size}</div>
                  </div>
                  <div className="colors">
                    Colors:
                    <div className="row">
                      <div
                        className="circle"
                        style={{ backgroundColor: `${item.color[0]}` }}
                      ></div>
                      <div
                        className="circle"
                        style={{ backgroundColor: `${item.color[1]}` }}
                      ></div>
                      <div
                        className="circle"
                        style={{ backgroundColor: `${item.color[2]}` }}
                      ></div>
                      <div
                        className="circle"
                        style={{ backgroundColor: `${item.color[3]}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">Rating: {item.rating}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
