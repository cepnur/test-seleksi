import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">
        MicroFrontend Menu
      </h1>
      <div className="my-4 text-center">
        <Link to="/">Home</Link> | <Link to="/menu">Menu</Link>
      </div>
      <div className="bg-gray-100 p-4 mt-4">Remote Menu:</div>
      <div id="menu"></div>
    </div>
  );
};

export default App;
