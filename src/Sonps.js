import React from 'react'
import { Creative, Crea,Speackers,P ,Slidapper} from './Creativestyl'
import Sponser from './Sponser';
import SponserData from './SponserData';

const Sonps = () => {
  return (
    <Creative>
      <div className='container'>
      <div>
        < Crea>Our </Crea>
        <Speackers>Sponser</Speackers>
        <P>Note that the development build is not optimized.</P>
      </div >
  <div style={{display:" flex"}}>
          {SponserData.map(item=>{
          return(
            <Sponser imag={item.imag} key={item.id}/>
          )
          
      })}
      </div> 
      </div>
    </Creative>
  )
}


export default Sonps
