import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Mainbody from './Components/Mainbody';
import Template from './Components/Template';
import Form from './Components/Form';
import DisplayForm from './Components/DisplayForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div className="app">
     <Header />
    <Template />
  <Mainbody /> 

   </div>
  );
}

export default App;
