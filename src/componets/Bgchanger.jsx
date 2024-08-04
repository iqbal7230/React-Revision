import { useState } from 'react'


function Bgchange() {


  const [bg, setbg] = useState("olive");

  return (
    
      <div style={{backgroundColor :bg, width: "100vw", height: "100vh"}}>
        <h1>Bg changer</h1>
        <h1>Background color is {bg}</h1>
        <button onClick={()=>setbg('red')}>Red</button>  
        <button onClick={()=> setbg('green')}>Green</button>  
        <button onClick={()=> setbg('yellow')}>Yellow</button>  
        <button onClick={()=> setbg('blue')}>Blue</button>

      </div>
       
    
  )
}

export default Bgchange;
