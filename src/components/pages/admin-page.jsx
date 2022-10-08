import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../adminPageComponent/product";
import CreateForm from "../adminPageComponent/createNew";
function adminPage() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [showModal,setModal]=useState(false);

  const handleChange = async (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `https://stasmartyn-web-shop.herokuapp.com/${input}`;
      await axios.get(apiUrl).then((resp) => {
        setData(resp.data);
      });
    } catch (error) {
      alert("Not Found");
    }
  };

  const switcher=()=>{
    setModal(!showModal)
}
  return (
    <section className="container admin_page">
      <form onSubmit={handleSubmit} className="admin_serch_form">
        <input type="text" onChange={handleChange} className="admin_input" placeholder="enter id"/>
      </form>
      <Product props={data} />
      <button onClick={()=>{switcher()}} className="modal_form">Create New Product</button>
      {showModal && (
          <CreateForm  onToggleModal={switcher}/>
        
        )}
    </section>
  );
}
export default adminPage;
