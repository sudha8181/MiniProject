import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Accordian.css';

const Accordians=({ques,ans})=>{

    const [show,setShow]=useState(false);

   return(
    <>
      
       <div className="bg-light py-2 mx-5  mt-4  d-flex flex-row align-items-center">
        <button className="border-0 bg-light align-self-start pt-2" onClick={()=>{setShow(!show)}}>{
            !show?"+":"-"
        }
        </button>
        <p className="pt-2 fw-bold">{ques}</p>

        </div>
        {
            show &&  <p className="mx-5 bg-secondary mt-0 py-3 px-3">{ans}</p>
        }
       
        
    </>
    );
}

export default Accordians;