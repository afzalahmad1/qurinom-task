import React from "react";
import "./styles.css";
const Aside = ({handleColorChange,handleSizeChange}) => {
  return (
    <div className="aside">
      <section>
        <p>Colors</p>
        <ul>
          <li>
            <input
              id="red"
              type="radio"
                onChange={()=>handleColorChange("red")}
              name="color"
              value="Red"
            />
            <label htmlFor="red">Red</label>
          </li>
          <li>
            <input
              id="blue"
              type="radio"
              //   onchange="getColorValue(this.value)"
              name="color"
              value="Blue"
            />
            <label htmlFor="blue">Blue</label>
          </li>
          <li>
            <input
              id="green"
              type="radio"
              onChange={()=>handleColorChange("green")}
              name="color"
              value="Green"
            />
            <label htmlFor="green">Green</label>
          </li>
          <li>
            <input
              id="black"
              type="radio"
              onChange={()=>handleColorChange("black")}
              name="color"
              value="Black"
            />
            <label htmlFor="black">Black</label>
          </li>
          <li>
            <input
              id="white"
              type="radio"
              onChange={()=>handleColorChange("white")}
              name="color"
              value="White"
            />
            <label htmlFor="white">White</label>
          </li>
        </ul>
      </section>
      <section>
        <p>Sizes</p>
        <ul>
          <li>
            <input
              id="s"
              type="radio"
              onChange={()=> handleSizeChange("S")}
              name="sizes"
              value="S"
            />
            <label htmlFor="s">S</label>
          </li>
          <li>
            <input
              id="m"
              type="radio"
              onChange={()=> handleSizeChange("M")}
              name="sizes"
              value="M"
            />
            <label htmlFor="m">M</label>
          </li>
          <li>
            <input
              id="l"
              type="radio"
              onChange={()=> handleSizeChange("L")}
              name="sizes"
              value="L"
            />
            <label htmlFor="l">L</label>
          </li>
          <li>
            <input
              id="xl"
              type="radio"
              onChange={()=> handleSizeChange("XL")}
              name="sizes"
              value="XL"
            />
            <label htmlFor="xl">XL</label>
          </li>
          <li>
            <input
              id="xxl"
              type="radio"
              onChange={()=> handleSizeChange("XXL")}
              name="sizes"
              value="XXL"
            />
            <label htmlFor="xxl">XXL</label>
          </li>
        </ul>
      </section>

      {/* <section>
        <p>Price Range</p>
        <ul>
          <li>
            <input
              id="0-25"
              type="radio"
              name="prange"
              //   onclick="searchByPrice(0,25)"
            />
            <label htmlFor="0-25">0 to 1000</label>
          </li>
          <li>
            <input
              id="25-50"
              type="radio"
              name="prange"
              //   onclick="searchByPrice(25,50)"
            />
            <label htmlFor="25-50">1000 to 2000</label>
          </li>
          <li>
            <input
              id="50-100"
              type="radio"
              name="prange"
              //   onclick="searchByPrice(50,100)"
            />
            <label htmlFor="50-100">2000 to 3000</label>
          </li>
          <li>
            <input
              id="100on"
              type="radio"
              name="prange"
              //   onclick="searchByPrice(100,100000000)"
            />
            <label htmlFor="100on">3000 onwards</label>
          </li>
        </ul>
      </section> */}
    </div>
  );
};

export default Aside;
