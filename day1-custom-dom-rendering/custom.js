

const container=document.querySelector("#root");

function creatdomelement(){
    return {
     type:'a',
     props:{href:"https://www.linkedin.com/in/ashutosh-fullstackdeveloper",
            id:"myid",
            class:"uk"      
     },
      children:"click me " 
    } 
}

 function addElementinDom(domelement,container){
    let obj=document.createElement(domelement.type);
    obj.id=domelement.props.id;
    obj.className=domelement.props.class;
    obj.setAttribute("href",domelement.props.href);
    obj.innerHTML=domelement.children;
    container.appendChild(obj);
 }
/*
 addElementinDom(creatdomelement(),container);
 */

function addElementinDom_Updated(element,container){
  let obj=document.createElement(element.type)
     
   for(let prop in element.props){
    if(prop==="children") continue;
    if(prop==="class"){
      obj.className=element[prop]
    }
    obj.setAttribute(prop,element.props[prop]);
   }
   obj.innerHTML=element.children;
   container.appendChild(obj)
}
addElementinDom_Updated(creatdomelement(),container);




 


