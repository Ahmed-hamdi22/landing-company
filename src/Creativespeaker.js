import React from 'react'
import { Creative, Crea,Speackers,P ,Slidapper} from './Creativestyl'
import Slide from './Slide'

const Creativespeaker = () => {
  return (
    <Creative>
      <div className='container'>
      <div>
        < Crea>Creative</Crea>
        <Speackers>Speackers</Speackers>
        <P>Note that the development build is not optimized.</P>
      </div >
      <Slidapper>
      <Slide/>
      </Slidapper>
      </div>
    </Creative>
  )
}

export default Creativespeaker