import React, { Component } from "react";
import axios from "axios";
import TopSales from "../topSales/topSales";
import BestSeller from "../bestSeller/bestSeller";
import SelectCategory from "../selectCategory/selectCategory";
import SideBar from "../sidebar/sideBar"
class Home extends Component {
  state = {
    data: [],
    selectProduct: "",
  };
  componentDidMount() {
    if (this.state.data.length < 1) {
      axios
        .get(`https://stasmartyn-web-shop.herokuapp.com/`)
        .then((res) => this.setState({ data: res.data }));
    }
  }
  render() {
    const { data } = this.state;
    return (
      <section className="global_container">
        <SelectCategory />
        <TopSales />
        <BestSeller data={data} />
        <SideBar/>
      </section>
    );
  }
}

export default Home;
