import React from "react";
import SelectSvg from "../selectCategory/selectSvg";
import { NavLink } from "react-router-dom";

function basketPage() {
  return (
    <section className="basket_section">
      <nav>
        <ul className="basket_nav_list">
          <li className="basket_list_item">
            <NavLink className="return_btn" to="/">
              <SelectSvg id="arrow" />
            </NavLink>
          </li>
          <li className="basket_list_item"> <p className="add_address_text">Add address</p><button className="address_btn"><SelectSvg id="address"/></button></li>
        </ul>
      </nav>
      <h2 className="basket_title">My Cart</h2>
      <div className="basket_card">

        {/* create a function to calculate product */}

        <ul className="my_cart_info_list">
            <li className="my_cart_info_list_item"><p className="cart_total_info">Total</p><p className="price_and_delivery">$333333</p></li>
            <li className="my_cart_info_list_item"><p className="cart_total_info">Delivery</p><p className="price_and_delivery">free/nohalyava</p></li>
        </ul>
        <button className="checkout_btn">Checkout</button>
      </div>
    </section>
  );
}
export default basketPage;
