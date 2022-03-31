import React from 'react';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Vector } from './img/Vector.svg';
import { useState, useEffect } from "react";

interface Iprops{
    methodCheckBox:any,
    checkedInputsMethod:any
  }
function Method({methodCheckBox,checkedInputsMethod}:Iprops){
 






    return (
        <div style={{width:"130px",height:"80px",borderRadius:"4px",outline:"1px solid #939FA5" ,backgroundColor:"#fff"}}>
            <div style={{display:"flex",flexDirection:"column",height:"80px",paddingLeft:"12px",justifyContent:"space-between"}}>
                <div style={{display:"flex",paddingTop:"17px",alignItems:"center"}}>
                    <input onChange={(e)=>methodCheckBox(e)} checked={checkedInputsMethod.includes("밀링")?true:false} id="밀링" type="checkbox" style={{width:"18px",height:"18px",border:"2px solid #939FA5" }}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>밀링</div>
                    
                </div>
                <div style={{display:"flex",alignItems:"center",paddingBottom:"17px"}}>
                    <input onChange={(e)=>methodCheckBox(e)} checked={checkedInputsMethod.includes("선반")?true:false} id="선반" type="checkbox" style={{width:"18px",height:"18px",border:"2px solid #939FA5"}}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>선반</div>
                    
                </div>
               
            </div>
        </div>
      
      )
    }
export default Method



