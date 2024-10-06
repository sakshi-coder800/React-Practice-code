import React, { useState } from 'react'
import './BG_Changer.css'
const BG_Changer = () => {
   const[Color,setColor] =useState('red');


//    another method 

  // Function to change the background color
//   const changeBgColor = (color) => {
//     setBgColor(color);
//   };
  return (
    <div className="app" style={{backgroundColor:Color}}>
    {/* <div className="app" style={{ backgroundColor: bgColor }}> */}
      <h1>Background Color {Color} </h1>
      <div className="fixed-bottom">
      {/* <Button type="primary" onClick={() => changeBgColor('#ff6666')}>Red</Button> */}

        <button  onClick={()=>setColor("yellow")}>Yellow</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("orange")} >Orange</button>
        <button  onClick={()=>setColor("purple")}>Purple</button>
        <button  onClick={()=>setColor("black")}>black</button>
      </div>
    </div>
  )
}

export default BG_Changer