import React from 'react';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Vector } from './img/Vector.svg';
import { useState, useEffect } from "react";
import { readBuilderProgram } from 'typescript';
import "./requests.css"
interface requestS{
        id: number,
      title: string,
      client: string,
      due: string,
      count: number,
      amount: number,
      method: string[],
      material: string[],
      status: string,
      docs: string
}
interface Iprops{
    
    req:requestS,
   
  }
function Requests({req}:Iprops){

   const materialList = req.material.map((req:any,key:number)=>(key>0? <div key={key}>,{req}</div>:<div key={key}>{req}</div>))
   const methodList = req.method.map((req:any,key:number)=>(key>0? <div key={key}>,{req}</div>:<div key={key}>{req}</div>))

    return (
            <div style={{margin:"24px 16px 24px 16px"}}>
                <div className="first-level-req" style={{display:"flex",flexDirection:"column" ,borderBottom:"1px solid #E5E5E5",maxWidth:"334px",justifyContent:"space-between"}}>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div style={{fontSize:"16px",fontFamily:"NotoSans-Bold",marginBottom:"4px"}}>{req.title}</div>
                            {req.status == "상담중"?
                            <div style={{fontSize:"12px",color: "#FFA000",borderRadius:"12px",width:"50px",height:"24px",outline:"1px solid #FFA000",lineHeight:"25px",textAlign:"center"}}>상담중</div>
                            :
                            null
                            }
                        </div>
                    
                        <div style={{fontSize:"14px", fontFamily:"NotoSans-Regular"}}>{req.client}</div>
                    </div>     

                    <div style={{fontSize:"14px", color:"#939FA5",marginBottom:"16px"}}>{req.due}까지 납기</div>
                </div>

                <div style={{marginTop:"32px"}}>
                    <div style={{display:"flex",marginBottom:"8px"}}>
                        <div style={{width:"70px",height:"20px",fontSize:"14px", fontFamily:"NotoSans-Regular"}}>도면개수</div>
                        <div style={{marginLeft:"32px",fontSize:"14px",fontFamily:"NotoSans-Bold"}}>{req.count ?  req.count: req.docs}</div>
                    </div>
                    <div style={{display:"flex",marginBottom:"8px"}}>
                        <div style={{width:"70px",height:"20px",fontSize:"14px", fontFamily:"NotoSans-Regular"}}>총 수량</div>
                        <div style={{marginLeft:"32px",fontSize:"14px",fontFamily:"NotoSans-Bold"}}>{req.amount}</div>
                    </div>
                    <div style={{display:"flex",marginBottom:"8px"}}>
                        <div style={{width:"70px",height:"20px",fontSize:"14px", fontFamily:"NotoSans-Regular"}}>가공방식</div>
                        
                        
                        <div style={{marginLeft:"32px",width:"70px",height:"20px",display:"flex",fontSize:"14px",fontFamily:"NotoSans-Bold"}}>
                            {methodList}
                        </div>
                        
                    </div>
                    <div style={{display:"flex",fontSize:"14px",fontFamily:"NotoSans-Bold"}}>
                        <div style={{width:"70px",height:"20px",fontSize:"14px", fontFamily:"NotoSans-Regular"}}>재료</div>
                        <div style={{display:"flex",marginLeft:"32px"}}>
                            {materialList}
                        </div>
                    </div>

                </div>    
                <div style={{display:"flex",textAlign:"center"}}>
                    <div style={{lineHeight:"32px",marginTop:"32px",width:"108px",height:"32px",backgroundColor:"#2196F3",color:"#fff",marginBottom:"24px",borderRadius:"4px",fontSize:"14px"}}>
                        요청 내역 보기
                    </div>
                    <div style={{lineHeight:"32px",marginTop:"32px",width:"76px",height:"32px",outline: "1px solid #2196F3",color:"#2196F3",marginBottom:"24px",marginLeft:"8px",borderRadius:"4px",fontSize:"14px"}}>
                        채팅하기
                    </div>
                </div>
            
          

        </div>
      
    )
}
export default Requests