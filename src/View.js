import React from 'react'
import "./Style.css";
import {Container,Col,Row}from 'react-bootstrap';
import { faUserGroup} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Overapper, Titel } from './Styled';
import { Des} from './Styled';
const View = ({icon,titel,des}) => {
  return (
    <Overapper >
        
     <div>
             <FontAwesomeIcon color="#f2545f" size='2xl' className='ic' icon={icon} />
            </div>
             <Titel>{titel}</Titel>   
            <Des>{des}</Des>
         
            
    </Overapper>
  )
}

export default View


// import { faUserGroup} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// export default function View ({icon,titel,des}) {
//   return (
//     <>
//     <div>
//             <FontAwesomeIcon icon={icon} />
//             </div>
//             <h2>{titel}</h2>   
//             <p>{des}</p>
//     </>
//   )
// }
