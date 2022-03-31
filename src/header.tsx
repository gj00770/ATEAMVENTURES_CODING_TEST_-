import React from 'react';
import smallLogo from './img/smallLogo.svg'
import bigLogo from './img/logo.svg'
import Sidebar from './sidebar';
import { useState, useEffect, useRef } from "react";
import  './header.css'
import Vector from './img/Vector.svg'
import VectorBlack from './img/Vector Black.svg'

function Header( ){
    const [xPosition, setX] = useState(-280);
    const hamburgerEl = useRef () as React.MutableRefObject<HTMLDivElement>;
    const SidebarEl = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState<number>(0)
     const toggleMenu = () => {
          setX(0);
          setIsOpen(true);
      };
    
    const handleX= (x:number)=>{
        setX(x);
    }
    const clickOutside = ({target}:React.BaseSyntheticEvent | MouseEvent) =>{
          
          if(!hamburgerEl.current.contains(target)&&!SidebarEl.current.contains(target)){
            handleX(-280);
            setIsOpen(false);
          }
      }
      const resizeWindow = () => {
        if(window.innerWidth>=599 ){
          setIsOpen(false);
          setX(-280);
        }
      }
    useEffect(() => {
   
        window.addEventListener("click", clickOutside);
        window.addEventListener('resize', resizeWindow);
        return () => {
        window.removeEventListener("click", clickOutside);
        window.removeEventListener('resize', resizeWindow);
        };
        
        
      }, []);

  return(
    <div>
        <div className="header-container" style={{backgroundColor:"#1565C0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style = {{paddingLeft:"40px", display:"flex"}}> 
            <div className="hamburger" style={{width:"18px",height:"14px",cursor:"pointer"}} onClick={toggleMenu}  ref={hamburgerEl}>
                <div style={{backgroundColor:"white",width:"18px",height:"2px",marginBottom:"3px"}}></div>
                <div style={{backgroundColor:"white",width:"18px",height:"2px",marginBottom:"3px"}}></div>
                <div style={{backgroundColor:"white",width:"18px",height:"2px"}}></div>
            </div>
            <div>
            <img className="big-logo" src={bigLogo}/>  
            </div>
            </div>
            <div className="headerContent" ref={SidebarEl} style={{display:"flex"}}>
            
               <Sidebar   isOpen={isOpen} xPosition={xPosition} width={300} height={"100vh"}>
                <div className="vector-logo-container" > 
                    <img className="vector-logo"  src={Vector}/>
                    <div className = "headercontent-company"style={{fontSize:"14px",paddingRight:"32px",marginLeft:"8px"}}>A 가공 업체</div>
                </div>
                <div className="vector-logo-black-container" > 
                    <img className="vector-logo-black"  src={VectorBlack}/>
                    <div className = "headercontent-company"style={{fontSize:"14px",paddingRight:"32px",marginLeft:"8px"}}>파트너정밀가공</div>
                </div>
                <div className = "headercontent-divider" style={{fontSize:"14px",paddingRight:"32px"}}>|</div>
                <div style = {{display:"flex"}}> 
                    <div  className = "headercontent-logout" style={{fontSize:"14px",paddingRight:"40px"}}>로그아웃</div>
                </div>
                </Sidebar>
            </div>
        </div>
    </div>


  )
}
export default Header