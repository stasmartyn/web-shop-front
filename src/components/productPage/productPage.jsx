import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectSvg from "../selectCategory/selectSvg";
import { useParams } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import PhoneCarousels from "../carousel/phoneCarousel";
import Tabs from "../tabs/tabs";
function productPage() {
  const [data, setData] = useState(null);
  const [style, setStyle] = useState(false);
  let phoneId = useParams().id;
  useEffect(() => {
    const apiUrl = `https://stasmartyn-web-shop.herokuapp.com/${phoneId}`;
    axios.get(apiUrl).then((resp) => {
      const phone = resp.data;
      setData(phone);
    });
  }, [setData]);
  const handleClickLike = () => {
    setStyle(!style);
  };
  if (data) {
    return (
      <section className="product_page_section">
        <div className="product_page_nav">
          <NavLink className="return_btn" to="/">
            <SelectSvg id="arrow" />
          </NavLink>
          <h3 className="product_detail_title">Product Details</h3>
          <NavLink className="basket_btn" to="/basket">
            <SelectSvg id="basket" />
          </NavLink>
        </div>
        <PhoneCarousels data={data.img} />

        <div className="about_product">
          <div className="product_card">
            <h1 className="product_title">{data.title}</h1>
            <button
              className={`like_btn ${style ? "active_like" : ""}`}
              onClick={handleClickLike}
            >
              <SelectSvg id="like" />
            </button>
          </div>
          <Tabs data={data} />
        </div>
      </section>
    );
  }
}
export default productPage;
