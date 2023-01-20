/**
 * @class       : App
 * @author      : DevEkla (ekla@ArchLinuxEkla)
 * @created     : jeudi janv. 19, 2023 17:52:31 CET
 * @description : App
 */


    
import React, { Component } from "react";
import {Route, Routes, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Header from "../src/components/header";
import Body from "../src/components/body";
import NotesListPage from "./pages/NotesListPages"; 
import NotePage from "./pages/NotePage";

function App () {     return (
            <BrowserRouter basename="/">
            <div className="container dark">
    <div className="app">
            <Header />
            <h1 className="h1"> Hello World ! </h1>
            <Routes>
            <Route path={"/"} exact element={<NotesListPage/>}> //exact element avoid to the element being render for each page beginning with '/' 
            </Route>
            <Route path={"/note/:id"} element={<NotePage/>}/>
            </Routes>
    </div>
    </div>
        </BrowserRouter>);

    
}

export default App;
