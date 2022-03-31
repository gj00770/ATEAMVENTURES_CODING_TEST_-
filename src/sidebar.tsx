import "./sidebar.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import smallLogo from './img/smallLogo.svg'
interface SidebarProps{
    width:number,
    height:any,
    children:any,
    isOpen:boolean,
    xPosition:number,
}
export const Sidebar = ({ isOpen, children,xPosition }:SidebarProps) => {


  

  return (
    
    <div className="side-bar" style={{
          zIndex:"3",
          transform: `translatex(${xPosition}px)`,
          boxShadow: isOpen === true? " rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.12) 2px 2px 3px 3px" : "none"
        }}>
        <div className="small-logo-container ">
        <img className="small-logo" src={smallLogo}/> 
         </div>
        
        <div className="content">{children}</div>
          </div>
    
  );
};
export default Sidebar