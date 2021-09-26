
import React from "react";
import './App.css';
import Header from "./Header";
import Result from "./Result";
import Tabs_new from './Tabs_new';





function App() {

  return (
    <div className="grid-container-app ">
      <div className="item1"><Header/></div>
      <div className="item2"> <Tabs_new /></div>
     
      <div className="item3 footer"></div>
    </div>
  //  <div className="container-sc">

  //  </div>
  );
}

export default App;
