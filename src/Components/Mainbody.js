import React from 'react'
import form from './form.png';
import './Mainbody.css'


const Mainbody = () => {
  return (
    <div className='main_body'>
        <div className="mainbody_top">
        <h3 style={{fontSize:"16px" , fontWeight:'500'}}>Created/Saved Forms</h3>
        </div>
        <div className="mainbody_docs">
           <div className='doc_card'>
                <img src={form} alt="form" height="100px"  />
                <p className="creator_name" style={{textAlign:"center"}}>Form Id </p>
            </div> 
        </div>
    </div>
  )
}

export default Mainbody