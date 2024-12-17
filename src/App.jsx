import { useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound";
import Nav from "./nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/products/:id" element ={<Products/>}/>
        <Route path="/dashboard" element ={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element ={<Settings/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
