import React from 'react'
import './Template.css'
import formPng from './formpng.png';
import Form from './Form';


const Template = () => {   


  return (
    <div className='template_section'>
        <div className="template_top">
            <div className="template_left">
                <h3 style={{fontSize:"16px", color:"#202124"}}>Create a New Form</h3>
            </div>
        
        </div>
        <div className="template_body">
            <div className='card'>
               <img  height="80px" src = {formPng} alt ="Click Here to Create" /> 
                <p>Create Form <br/>from Scratch</p>
            </div>
        </div>
    </div>
  )
}

export default Template