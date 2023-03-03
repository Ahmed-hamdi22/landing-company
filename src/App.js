
// import styled from '@emotion/styled'
// import {Container,Col,Row}from 'react-bootstrap';
import View from './View';
import Speaker from './Speaker';
import ViewData from './ViewData';
import "./Style.css";
// import { Overapper } from './Styled';
import SpeakerData from './SpeakerData';
// import { OurApper } from './Ourstyled';
import Ourpro from './Ourpro';
import OurproData from './OurproData';
import Sponser from './Sponser';
import SponserData from './SponserData';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';


// import { faUserGroup,faCoffee} from '@fortawesome/free-solid-svg-icons';
const App = () => {
  return (
   <>

 
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='sponser'element={<Sponser/>}/>
   </Routes>
   
    </>
  )
}

export default App
