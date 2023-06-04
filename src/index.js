import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './componentsJS/Home';
import AboutMe from './componentsJS/AboutMe';
import MyStuff from './componentsJS/Mystuff';
import Projects from './componentsJS/Projects';
import Todolist from './componentsJS/Todolist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App/>}>
        <Route path="home" element={<Home/>}/>
        <Route path='aboutme' element={<AboutMe/>}/>
        <Route path='projects' element={<Projects/>}>
        <Route path='Todolist/:projectName' element={<Todolist/>}/>
        </Route>
        <Route path='myStuff' element={<MyStuff/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
