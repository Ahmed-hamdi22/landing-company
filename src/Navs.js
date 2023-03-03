// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
import "./Style.css";
function Navs() {
  return (
    <div className='sc1'>
   
        <div className="container" >
          <div className='divnav'>
          <div className='divnav1'>
          <h5 className="Navbar.Brand logo" href="#home" ><em>logo</em></h5></div>
          <div className='divnav2'>
          <div className='Nav2'>
          <Link className="  Nlink" to="/">Home</Link>
            <Link className=" Nlink" href="#features">Sponser</Link>
            <Link  className="  Nlink"href="#pricing">Speaker</Link>
            <Link className="Nlink" href="#pricing">Overview</Link>
            <Link className="Nlink" href="#pricing">contact</Link>
          </div>
          </div>
          </div>
        </div>

    
    </div>
  );
}

export default Navs;