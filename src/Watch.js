import React from 'react'
import { WatchA,Span,P } from './Stylewach'
const Watch = () => {
  return (
    
         <div className='container'>
     <WatchA>
        <div>
            <Span>watch video</Span>
            <P lg-6 md-3>
            Windows PowerShel Copyright (C) Microsoft Corporation. All rights reserved.
            Windows PowerShellCopyright (C) Microsoft Corporation. All rights reserved.
            Windows PowerShellCopyright (C) Microsoft Corporation. All rights reserved.

            </P>
            <P>Windows PowerShellCopyright (C) Microsoft Corporation. All rights reserved.
            Windows PowerShellCopyright (C) Microsoft Corporation. All rights reserved.
            Windows PowerShellCopyright (C) Microsoft Corporation. All rights reserved.

            </P>
        </div>
        <div>
        <iframe width="480px" height="350px" src='https://www.youtube.com/embed/XDPwXQJAB0' frameBorder="0"></iframe>
        </div>
     </WatchA>
    </div>
 
  )
}

export default Watch