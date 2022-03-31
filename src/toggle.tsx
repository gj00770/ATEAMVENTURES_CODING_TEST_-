import React from 'react';
import "./toggle.css"


function Toggle({consult}:any) {
  return (
  
    <div className="container"  >
        <div className="toggle-switch" >
            <input type="checkbox" id="chkTog" onChange={consult}></input>
            <label htmlFor="chkTog" style={{cursor:"pointer"}}>
            <span className="toggle-track"></span>
            </label>
        </div>
    </div>
  
  )
}

export default Toggle;