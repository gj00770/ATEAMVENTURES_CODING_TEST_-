import React from 'react';

import { useState, useEffect } from "react";
import Requests from "./requests"
import "./requestcontainer.css"

function Requestcontainer({checkedInputs,checkedInputsMethod,consulting}:any){
    const [req,setReq] = useState<any>([])





    useEffect(() => {
        let url = "http://localhost:5000/requests?"
          if(Array.isArray(checkedInputs)&&checkedInputs.length>0){
            for(let i = 0 ; i < checkedInputs.length;i++){
                url = `${url}`+`&material_like=${checkedInputs[i]}`
            }
          }
          if(checkedInputsMethod.length>0){

        }
        if(Array.isArray(checkedInputsMethod)&&checkedInputsMethod.length>0){
            for(let i = 0 ; i < checkedInputsMethod.length;i++){
                url = `${url}`+`&method_like=${checkedInputsMethod[i]}`
            }
          }
          if(consulting == true){
          
                url = `${url}`+`status=상담중`
            
          }

            fetch(`${url}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReq([...data]);

            });
            
        }, [checkedInputs,checkedInputsMethod,consulting]);



        //,outline:"1px solid red"


    return (
        <div className="request" style={{marginTop:"32px",display:"flex",maxWidth:"1130px",flexWrap:"wrap"}}>
          {
              req.map((req:any,key:number)=>(
                   key%2== 0 && key%3 ==0?
                  <div className="request-container23" key={key} style={{maxWidth:"366px",maxHeight:"356px",minHeight:"340px",display:"flex" ,flexDirection:"column",alignItems:"flex-start",outline:"1px solid #E5E5E5",textAlign:"left",borderRadius:"4px",cursor:"pointer"}}>
                    <Requests req={req} key={key} />
                
                  </div>  
                  :
                   key%2== 0 ?
                  <div className="request-container2" key={key} style={{maxWidth:"366px",maxHeight:"356px",minHeight:"340px",display:"flex" ,flexDirection:"column",alignItems:"flex-start",outline:"1px solid #E5E5E5",textAlign:"left",borderRadius:"4px",cursor:"pointer"}}>
                    <Requests req={req} key={key} />
                
                  </div>  
                  :
                   key%3== 0 ?
                  <div className="request-container3" key={key} style={{maxWidth:"366px",maxHeight:"356px",minHeight:"340px",display:"flex" ,flexDirection:"column",alignItems:"flex-start",outline:"1px solid #E5E5E5",textAlign:"left",borderRadius:"4px",cursor:"pointer"}}>
                    <Requests req={req} key={key} />
                
                  </div>  
                  :
                  <div className="request-container" key={key} style={{maxWidth:"366px",maxHeight:"356px",minHeight:"340px",display:"flex" ,flexDirection:"column",alignItems:"flex-start",outline:"1px solid #E5E5E5",textAlign:"left",borderRadius:"4px",cursor:"pointer"}}>
                    <Requests req={req} key={key} />
                    
                  </div>  
              ))
          }
        </div>
      
    )
}
export default Requestcontainer