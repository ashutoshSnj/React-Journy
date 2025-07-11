
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let num=12;

function App() {

  let [counter,setcounter]=useState(1) 

  
 
  let value=12;
  
  
  let addnvalue=()=>{
   if(counter<20){
   setcounter(counter+1)
  }
  else{
   console.log("We Cant increase the counter")
  }
  }
  let removevalue=()=>{
    if(counter>=1){
   setcounter(counter-1)
    }
    else{
      console.log("We Cant decrease the counter")
    }
   
  }
    return (
    <>
 

      <h1>Counter Project </h1>
      <h1>Counter Value:{counter}</h1>

      <button onClick={()=>addnvalue()} >
        Add Values value </button>
  <br/> <br/>
   <button onClick= {removevalue}>Remove Value</button>
    </>
  )
}

export default App
