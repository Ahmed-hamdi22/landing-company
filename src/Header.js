import React from 'react'
import { HeaderApper } from './Headerstyl'
import {H3,H1,Btn1,Btn2,Em }from './Headerstyl'
const Header = () => {
  return (
    <HeaderApper> 
     <H3><em>wellcome in my websaite</em></H3>
        <H1>web Design conference</H1>
        <Btn1><Em>lEREAN MORE</Em> </Btn1>
        <Btn2><Em>REGSTER NOW</Em></Btn2>
    </HeaderApper>
  )
}

export default Header