import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { connect, Connect } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

function App(props) {
  console.log("app", props.bookList);

  return (
    <div className="App">
      <h1>
        Alışveriş Sepetiniz
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React"
        />{" "}
        React-Redux
      </h1>
      <div
        className=" d-flex justify-content-end w-100 mt-1">
      
        <button className=" btn btn-sm w-5 m-1 p-1 bg-primary text-white "> Hesabım </button>
        <button className=" btn btn-sm w-5 m-1 p-1 bg-primary text-white "> Logout</button>
        <button className="btn btn-sm w-5 m-1 p-1 bg-primary text-white "> Sepetim </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(App);
