import React,{useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, [lastScrollY]);
  
  return (
    <nav className={showNav ? "nav-visible" : "nav-hidden"}>
        <div className='home-nav'>
            <div className='logo'>
              <img src="./babymetallogo.png" alt="" />
            </div>
            <div className='items'>
                <a ><Link to="/">Inicio</Link></a>
                <a ><Link to="/Albums">Albums</Link></a>
                <a ><Link to="/Canciones">Canciones</Link></a>
                <a ><Link to="/Miembros">Miembros</Link></a>
                <a ><Link to="/Contacto">Contacto</Link></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
