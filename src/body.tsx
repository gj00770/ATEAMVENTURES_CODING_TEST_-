import React from 'react';
import { useState, useEffect, useRef } from "react";


import { ReactComponent as ArrowDrop } from './img/arrow_drop_down_24px.svg';
import { ReactComponent as ArrowDropWhite } from './img/arrow_drop_down_white_24px.svg';
import { ReactComponent as Refresh } from './img/refresh.svg';
import Toggle from './toggle';
import Meterial from './meterial'
import Method from './method'
import RequestContainer from './requestcontainer'
import './body.css'

function Body() {
    type CheckI = { text: string  };
    type CheckM = { text: string  };
    const [colorMeteria, setColorMeteria] = useState<string>("1px solid #939FA5");
    const [colorMethod, setColorMehod] = useState<string>("1px solid #939FA5");
    const [consulting, setConsulting] = useState<boolean>(false);
    const [openMeteria,setOpenMeteria] = useState<boolean>(false);
    const [openMethod,setOpenMethod] = useState<boolean>(false);
    const [checkedInputs, setCheckedInputs] = useState([] as CheckI[]);
    const [checkedInputsMethod, setCheckedInputsMethod] = useState([] as CheckM[]);
    const modalEl = useRef() as React.MutableRefObject<HTMLDivElement>;;
    const modalElMethod = useRef() as React.MutableRefObject<HTMLDivElement>;;
   const onMouseEnterHandler =() =>{
    setColorMeteria("1px solid #2196F3");
   }
   const onMouseLeaveHandler =() =>{
    setColorMeteria("1px solid #939FA5");
   }
   const onMouseEnterHandlerMethod =() =>{
    setColorMehod("1px solid #2196F3");
   }
   const onMouseLeaveHandlerMethod =() =>{
    setColorMehod("1px solid #939FA5");
   }
   const isOpenMeteial =() =>{
       
    setOpenMeteria(true);
  

   }
   const isOpenMethod =() =>{
       
    setOpenMethod(true);
  

   }
   const ResetMeterial= ()=>{
    setCheckedInputs([]);
    setCheckedInputsMethod([]);
   }
   const consult=()=>{
    setConsulting(!consulting)
   } 
  
    const handleClickOutside = ({ target }:any) => {
       
        if (openMeteria&&!modalEl.current.contains(target)) {
            setOpenMeteria(false);    
        }
         if (openMethod&&!modalElMethod.current.contains(target)) {
            setOpenMethod(false);    
        }
       
       
    };
   

    const meterialCheckBox = (e: React.BaseSyntheticEvent )=>{
        if(e.target.checked ){
            let array : CheckI[] = [...checkedInputs,e.target.id]
            setCheckedInputs(array)
        }
        else if(e.target.checked == false){
            setCheckedInputs(checkedInputs.filter((el:any) => e.target.id !== el))
        }
        
    }

    const methodCheckBox = (e:React.BaseSyntheticEvent)=>{
      
        if(e.target.checked ){
            const array : CheckM[] = [...checkedInputsMethod,e.target.id]
            
            setCheckedInputsMethod(array)
        }
        else if(e.target.checked == false){
            setCheckedInputsMethod(checkedInputsMethod.filter((el:any) => e.target.id !== el))
        }
        
    }


    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };




    }, [isOpenMeteial]);



  return (
  
     <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       <div className="navi" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:"1130px"}}>
            <div style={{fontSize:"20px",lineHeight:"32px",fontFamily:"NotoSans-Bold"}}>들어온 요청</div>
            <div style={{paddingBottom:"32px ",fontSize:"16px",lineHeight:"24px",color:"#323D45"}}>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
        </div>
      
      
      
        <div className="modal-toggle-container" style={{maxWidth:"1130px"}}>
        <div >
            <div  style={{display:"flex",alignItems:"center"}}>
                <div  onClick={isOpenMethod} onMouseEnter={onMouseEnterHandlerMethod}  onMouseLeave={onMouseLeaveHandlerMethod}
                style={{display:"flex",width:"98px",height:"32px",outline:`${colorMethod}`,borderRadius:"4px",textAlign:"center",alignItems:"center",justifyContent:"space-evenly",cursor:"pointer",backgroundColor:checkedInputsMethod.length>0 ? "#2196F3": "#fff"}}>
                    <div style={{fontSize:"12px", color:checkedInputsMethod.length>0 ? "white":"black"}}>가공방식 {checkedInputsMethod.length>0? '(' + checkedInputsMethod.length + ')':null }</div>
                    {
                    checkedInputsMethod.length > 0 ?
                        <ArrowDropWhite />
                        :
                        <ArrowDrop/>
                    }
                    
                
                </div>
                
                <div onClick={isOpenMeteial} onMouseEnter={onMouseEnterHandler}  onMouseLeave={onMouseLeaveHandler} 
                style={{display:"flex",width:"76px",height:"32px",outline:`${colorMeteria}`,borderRadius:"4px",marginLeft:"8px",textAlign:"center",alignItems:"center",justifyContent:"space-evenly",cursor:"pointer",backgroundColor:checkedInputs.length>0 ? "#2196F3": "#fff"}} >
                    
                    <div style={{fontSize:"12px", color:checkedInputs.length>0 ? "white":"black"}}>재료 {checkedInputs.length>0? '(' + checkedInputs.length + ')':null }</div>
                    
                    {
                    checkedInputs.length > 0 ?
                        <ArrowDropWhite />
                        :
                        <ArrowDrop/>
                    }
                    
                        
                    
                </div>
                {checkedInputs.length > 0 || checkedInputsMethod.length> 0 ?
                    <div style={{display:"flex" , cursor:"pointer"}} onClick={ResetMeterial}> 
                        <div style={{paddingLeft:"24px" ,display:"flex" }}>
                            <Refresh  />
                        </div>
                            <div style={{paddingLeft:"12px" ,display:"flex",fontSize:"12px",color:"#2196F3"}}>필터링 리셋</div>
                    </div>
                :
                null
                } 
            </div>
                
                
           
            
            
              
         </div>

         <div className="toggle" style={{display:"flex"}}>
              <Toggle consult={consult} />
            <div style={{paddingLeft:"16px",fontSize:"14px"}}>상담 중인 요청만 보기</div>
         </div>
         {openMethod?
                    <div className="mothodModal"  ref={modalElMethod} >
                      
                        <Method methodCheckBox={methodCheckBox} checkedInputsMethod={checkedInputsMethod}/>
                    </div>
                    :
                    null

                }
         
         {openMeteria?
            <div className="meteraiModal"  ref={modalEl}>
                <Meterial meterialCheckBox={meterialCheckBox} checkedInputs={checkedInputs} />
            </div>
                :
                null

        }

        </div>
        
               
          <RequestContainer checkedInputs={checkedInputs} checkedInputsMethod={checkedInputsMethod} consulting={consulting}/>

     </div>
  
  );
}

export default Body;