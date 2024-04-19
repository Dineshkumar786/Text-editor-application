
import './App.css';
import Navbar from './components/Navbar';
import TextForm from  './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import React , { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";



export default function App(props){
  const [mode , setMode] =  useState('light'); // whether  dark mode or light mode
  const [alert, setAlert] =  useState(null);
  
  const showAlert =(message, type)=> {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);    
  }

  const toggleMode = ()=> {
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='black';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils  is amazig app';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now !!';
      // }, 1500);
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
       showAlert("Light Mode has been enabled","success");
       document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <> 
    <Router>
    <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert ={alert}/>
    <div className='container my-4'>
    <Switch>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
          </Route>
          <Route exact path="/about">
          <AboutUs/>
          </Route>
      </Switch>
    </div>    
    </Router>
    </> 
);
  }
