import React, { useState } from 'react'
import { Wpper } from './Ourprostyl'
import Ourpro from './Ourpro';
import OurproData from './OurproData';
import './Style.css'
const Tabs = () => {
  const [tab, settab] = useState("tab");
  const switchtab= (tab)=>{
    settab(tab);
  }
  return (

    <>
     <div className='contanir'>
    <Wpper>
       
        <span onClick={()=>switchtab("tab1")}>Frist day</span>
        <span onClick={()=>switchtab("tab1")}>Second day</span>
        <span onClick={()=>switchtab("tab1")}>Thrid day</span>
    </Wpper>
      <hr/>
       {/* {tab=== "tab2"?
      tab2.map((item=>{
        
      })) 
      } */}
        <div className='pro'>
        {OurproData.map(item=>{
          return(
            <Ourpro img={item.img} titel={item.titel} room={item.room} icon={item.icon} time={item.time} name={item.name} desc={item.desc} key={item.id}
            />
          )
      })}
      </div>
      </div>
    </>
  )
}

export default Tabs
