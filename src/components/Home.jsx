import React from "react";

const Home = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {arra.map((index, value) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
