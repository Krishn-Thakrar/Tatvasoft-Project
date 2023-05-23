import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
  return(
    <>
    <div className="main">
      <div className="headmain">
        <Header />
      </div>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Register}></Route>
            <Route path="/product-list" Component={ProductList}></Route>
            <Route path="/login" Component={Login}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footmain">
        <Footer />
      </div>
      </div>
    </>
  );
}

export default App;