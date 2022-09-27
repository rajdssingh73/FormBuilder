import React from "react";
import { useNavigate } from "react-router-dom";
import form from "./form.png";
import "./Mainbody.css";
import formPng from './formpng.png';

const Mainbody = () => {
  const navigate = useNavigate();
  const goToCreateForm = () => {
    navigate("/createForm");
  };
  const goToViewForm = () => {
    navigate("/showForm");
  };
  return (
    <>
     
      <div className="main_create_form">
        <div className="mainbody_top">
          <h3 style={{ fontSize: "16px", fontWeight: "500" }}>
          Create a New Form
          </h3>
        </div>
        <div className="mainbody_docs">
          <div className="doc_card">
            <img
              onClick={() => goToCreateForm()}
              src={formPng}
              alt="form"
              height="100px"
            />
            <p className="creator_name" style={{ textAlign: "center" }}>
            
            </p>
          </div>
        </div>
      </div>
      <div className="main_body">
        <div className="mainbody_top">
          <h3 style={{ fontSize: "16px", fontWeight: "500" }}>View Your Created Forms</h3>
        </div>
        <div className="mainbody_docs">
          <div className="doc_card">
            <img
              onClick={() => goToViewForm()}
              src={form}
              alt="form"
              height="100px"
            />
            <p className="creator_name" style={{ textAlign: "center" }}>
            
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
