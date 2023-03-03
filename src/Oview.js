import React from 'react'
import { Oviewapp,Overcontanir } from './StyleOview'
import "./Style.css";
import ViewData from './ViewData';
import View from './View';

const Oview = () => {
  return (
    <Oviewapp>
    <div className='container'>
      
     {/* <div style={{display:" flex"}}> */}
<Overcontanir>

{ViewData.map(item=>{
    return(
      <View icon={item.icon}titel ={item.titel} des ={item.des} key={item.id}/>
  )
    })}
   {/* </div> */}
   </Overcontanir>

      </div>   
    
    </Oviewapp>
  )
}

export default Oview