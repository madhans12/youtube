import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css"
import Relatedvideos from "./Relatedvideos";
import { Route, Routes } from "react-router-dom";
import Searchpage from "./Searchpage";
import Api from "./Api";






function App() {
  return (
   <div className="app">
    
    <Header/>
    
    <Routes>
      <Route path="/" element={<Relatedvideos/>}>
    </Route>
    <Route path="/relatedvid" element={<Relatedvideos/>}></Route>
    
    <Route path="/search" element={
      <Api/>
    }></Route>
    

    </Routes>
    </div>
    
  );
}

export default App;
