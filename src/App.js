import {useEffect, useState} from 'react';
import './Main.css';
import useLocalstorage from './useLocalstorage'
// function getWindowDimention()
// {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width:width,
//     height:height
//   };
// }

function App() {

  const [name,setName]=useLocalstorage('name');
 // const [dimention,setDimention]=useState(()=>getWindowDimention())

  const updateValue=(value)=>{


    console.log("test");
    
    setName(value);


  }
// useEffect(()=>{

//   function handleResize(){
//     setDimention(getWindowDimention());
//   }
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);

// },[])



  return (
   
    <div className="container">
      {/* <div> Height: {dimention.height} Width: {dimention.width}</div> */}
      <div className="form-label">
          Name :
        </div>
      <div className="form-input">
    <input value={name} onChange={(e)=>updateValue(e.target.value)} type="text"  />
    </div>
    </div>
  );
}

export default App;
