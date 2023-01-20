/**
 * @class       : App
 * @author      : DevEkla (ekla@ArchLinuxEkla)
 * @created     : jeudi janv. 19, 2023 17:52:31 CET
 * @description : App
 */


    
import React, { Component } from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../src/components/header";
import Body from "../src/components/body";
import NotesListPage from "./pages/NotesListPages"; 
import NotePage from "./pages/NotePage";

// const Router = createBrowserRouter(routes, {
  // basename: "/dist",
// });
class App extends Component {

    render(){
        return (
            <BrowserRouter basename="/">
            <Header />
                
            <h1> Hello World ! It is me I know</h1>

            <Routes>
            <Route path="/" exact component={<Body/>}/>
            <Route path="/notes" Component={<NotePage/>}/>
            </Routes>
        </BrowserRouter>);
    }
}

export default App;
