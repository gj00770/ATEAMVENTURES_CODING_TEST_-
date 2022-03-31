import React from 'react';


interface Iprops{
    meterialCheckBox:any,
    checkedInputs:any
  }
function Meterial({meterialCheckBox,checkedInputs}:Iprops){







    return (
        <div style={{width:"130px",height:"164px",borderRadius:"4px",outline:"1px solid #939FA5" ,backgroundColor:"#fff"}}>
            <div style={{display:"flex",flexDirection:"column",height:"164px",paddingLeft:"12px",justifyContent:"space-between"}}>
                <div style={{display:"flex",paddingTop:"17px",alignItems:"center"}}>
                    <input onChange={(e)=>meterialCheckBox(e)} checked={checkedInputs.includes("알루미늄")?true:false} id="알루미늄" type="checkbox" style={{width:"18px",height:"18px",border:"2px solid #939FA5" }}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>알루미늄</div>
                    
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <input onChange={(e)=>meterialCheckBox(e)} checked={checkedInputs.includes("탄소강")?true:false} id="탄소강" type="checkbox" style={{width:"18px",height:"18px",border:"2px solid #939FA5"}}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>탄소강</div>
                    
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <input onChange={(e)=>meterialCheckBox(e)} checked={checkedInputs.includes("구리")?true:false} id="구리" type="checkbox"  style={{width:"18px",height:"18px",border:"2px solid #939FA5"}}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>구리</div>
                    
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <input onChange={(e)=>meterialCheckBox(e)} checked={checkedInputs.includes("합금강")?true:false} id="합금강" type="checkbox" style={{width:"18px",height:"18px",border:"2px solid #939FA5"}}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>합금강</div>
                    
                </div>
                <div style={{display:"flex",paddingBottom:"17px",alignItems:"center"}}>
                    <input onChange={(e)=>meterialCheckBox(e)} checked={checkedInputs.includes("강철")?true:false} id="강철" type="checkbox" style={{width:"18px",height:"18px",border:"2px solid #939FA5"}}></input>
                    <div style={{fontSize:"14px",fontWeight:"500",lineHeight:"20px",paddingLeft:"10px" }}>강철</div>
                    
                </div>
            </div>
        </div>
      
      )
    }
export default Meterial



