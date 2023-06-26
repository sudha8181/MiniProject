import React,{useState} from 'react';
import Accordians from './Acoordian/Accordian';
import Api from './Api';


function App() {

  const[data,setData]=useState(Api);
  return (
   <>
   <div className="w-50 bg-primary mx-auto  my-5 pb-5">
        <div className="py-3">
            <h1 className="text-dark text-center ">React Interview Question</h1>
        </div>
          {data.map((value)=>{
            
            return <Accordians
            key={value.id}
            ques={value.question}
            ans={value.answer}
            />

          })}

  </div>
   </>
  );
}

export default App;
