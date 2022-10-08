import React,{useState} from "react";
import axios from "axios";
import SelectSvg from "../selectCategory/selectSvg";
function createForm(props) {
    const [postData,setPostData]=useState({})
  const handlechange = (e) => {
    setPostData(postData=>({ ...postData, [e.target.name]: e.target.value }));
  };
  const handleSubmitForm= async(e)=>{
    e.preventDefault();
    try {        
        const apiUrl = `https://stasmartyn-web-shop.herokuapp.com/newProduct`;
        const newProduct=JSON.stringify(postData);
      axios.post(apiUrl,{newProduct}).then((resp)=>{
        alert(resp)
      });
    } catch (error) {
       alert(error)
    }

  }
  const switchmodal=()=>{
    props.onToggleModal()
}
  
  return (
    <section className="drop_down">
      <div className="create_form_modal">
        <button className="close_modal_btn" onClick={switchmodal}></button>
        <form onSubmit={handleSubmitForm}>
        <ul className="form_list">
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
              title
              <input required type="text" name="title" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                img
              <input required type="text" name="img" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                ram
              <input required type="text" name="ram" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                memory
              <input required type="text" name="memory" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                 cpu
              <input required type="text" name="cpu" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                camera
              <input required type="text" name="camera" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
            description
              <input required type="text" name="description" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                price
              <input required type="text" name="price" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
        </ul>
        <button className="submit_form_btn" type="submit" onClick={handleSubmitForm}>Submit</button>
        </form>
      </div>
    </section>
  );
}
export default createForm;
