import React,{useState, useEffect} from 'react'
import './Navbar.css'

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
            <div className='logo'>Logo</div>
            <div className='items'>
                <a href="#">Inicio</a>
                <a href="#">Albums</a>
                <a href="#">Canciones</a>
                <a href="#">Miembros</a>
                <a href="#">Contacto</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
