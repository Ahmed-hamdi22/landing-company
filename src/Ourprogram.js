import React from 'react'
import Tabs  from './Tabs'
import { Apper,Our,Pro,P} from './Ourprostyl'
import './Style.css'
const Ourprogram = () => {
  return (
    <Apper>
        <div className='container'>
        <div>
        <Our Our>Our</Our>
        <Pro>programs</Pro>
        <P>Note that the development build is not optimized.</P>
      </div >
        <Tabs/>
            
            
    
        {/* </Tabs> */}

        </div>
        
      
    </Apper>
  )
}

export default Ourprogram
