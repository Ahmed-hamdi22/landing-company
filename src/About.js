import React from 'react'
import { AboutApper,P,Span } from './Abostyle'
import './Style.css'
import aboutimg from './imagss/overview-img.jpg';

const About = () => {
  return (
    <div className='container'>
        <AboutApper>
        <div>
            <Span>
          Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6
</Span>
PS C:\Users\windows\e-commerce<P>

Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\windows\e-commerce 

</P>

            
        </div>
        <div >
            <img src={aboutimg} width="100%"/>
        </div>
        </AboutApper>
      
    </div>
  )
}

export default About
