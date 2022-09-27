import React, { useEffect } from "react";
import { useForm } from "../Context/FormContext";
import './DisplayForm.css'
import DisplayFormComp from "./DisplayFormComp";

function DisplayForm() {
  const { list } = useForm();

  return (
    <div className="showForm">
      {/* {list.map((item) => (
        <>{JSON.stringify(item, null, 2)}</>
      ))} */}
      <h3 style={{textAlign:"center"}}>Your Created Forms will be shown Here!</h3>
      <div className="display_form">
      {list.map((item, index) => 
      <div className="each_form">
        <DisplayFormComp key={index} data={item} />
      </div>)}
    </div>
    </div>
  );
}

export default DisplayForm;
