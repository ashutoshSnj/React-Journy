import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




function str(){
  return(<h2> iam okk</h2>)
}

let customelement= React.createElement('a',
  {href:"https://www.linkedin.com/in/ashutosh-fullstackdeveloper",
    id:"iu1",
    target:"_blank"
  },
  "click me to visit my linkdin"
)
let ele=  <a href="https://google.com" target='_blank'>visit google</a>



createRoot(document.getElementById('root')).render(
   // str()
   customelement
    
 
)
