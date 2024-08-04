import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Products />
    </div>
  );
};

export default Home;
