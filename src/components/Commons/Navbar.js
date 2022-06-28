import Link from 'next/link';
import React, {useState} from 'react';
import { useRouter } from "next/router";
import { Button } from './Button';
import { useIsMobile } from '../../utils/hooks/useIsMobile';
import { getWhatsappByRoute } from '../../utils/whatsappConfig';

function Navbar() {
  const [click, setClick] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const whatsapp = getWhatsappByRoute(pathname);

  const isMobile = useIsMobile();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // window.addEventListener("scroll", showMenuShadowOnScroll);

  // function showMenuShadowOnScroll() { 
  //   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //   shrinkOn = 50,
  //   navElement = document.getElementById("navbar");

  //   if (distanceY > shrinkOn) {
  //     navElement.classList.add("shadow-3");
  //   } else {
  //     navElement.classList.remove("shadow-3");
  //   }
  // };

  return (
    <>
      <nav className="navbar" id='navbar'>
        <div className="navbar-container container">
          <Link
            passHref
            href='/'
            onClick={closeMobileMenu}       
          >
            <img src={'/images/logo.webp'} alt="Logo" className='navbar-logo'/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click && isMobile ? 'nav-menu active shadow-3' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                activeClassName='active'
                href='/'
                onClick={closeMobileMenu}
              >
                <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`} >Home</a>
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                activeClassName='active'
                href='/emprestimo'
                onClick={closeMobileMenu}
              >
                <a className={`nav-link ${router.pathname == "/emprestimo" ? "active" : ""}`} >Empréstimo</a>
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                activeClassName='active'
                href='/fgts'
                onClick={closeMobileMenu}
              >
                <a className={`nav-link ${router.pathname == "/fgts" ? "active" : ""}`} >FGTS</a>
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                activeClassName='active'
                href='/auxilio-brasil'
                onClick={closeMobileMenu}
              >
                <a className={`nav-link ${router.pathname == "/auxilio-brasil" ? "active" : ""}`} >Auxílio Brasil</a>
              </Link>
            </li>
            {/* <li className='nav-item'>
              <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScBeveHxeglbvr38am6FIliXA5IYSQ2Kp4JlXzr6AdWBFrYHw/viewform" className="nav-link" rel="noreferrer">
                Trabalhe conosco
              </a>
            </li>
            <li className='nav-item'>
              <a target='_blank' href="https://credestados.stormfin.com.br/" className="nav-link" rel="noreferrer">
                Colaborador
              </a>
            </li> */}
            <Button
              variant='outlined'
              sx={{ marginLeft: isMobile ? '0' : '2rem' }}
              href={`https://wa.me/55${whatsapp}`}
              target='_blank'
              startIcon={<i className='fab fa-whatsapp' />}
            >
              Fale conosco
            </Button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
