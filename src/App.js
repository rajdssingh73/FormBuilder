import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Mainbody from "./Components/Mainbody";
import Template from "./Components/Template";
import Form from "./Components/Form";
import DisplayForm from "./Components/DisplayForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormProvider from "./Context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Mainbody />}></Route>
            <Route path="/createForm" element={<Form />}></Route>
            <Route path="/showForm" element={<DisplayForm />}></Route>
          </Route>
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
