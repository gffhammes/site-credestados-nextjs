import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from './Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { useScroll } from '../../hooks/useScroll'
import { useIsMobile } from '../../hooks/useIsMobile'

function Navbar() {
  const [click, setClick] = useState(false)
  const router = useRouter()
  const whatsapp = useWhatsApp()
  const isMobile = useIsMobile()
  const scroll = useScroll()

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showMenuShadow = scroll > 50

  return (
    <>
      <nav className={`${showMenuShadow ? 'shadow-3' : ''} navbar`} id="navbar">
        <div className="navbar-container container">
          <div onClick={closeMobileMenu} className="navbar-logo">
            <Link passHref href="/">
              <img src={'/images/logo.webp'} alt="Logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul
            className={
              click && isMobile ? 'nav-menu active shadow-3' : 'nav-menu'
            }
          >
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link activeClassName="active" href="/">
                <a
                  className={`nav-link ${router.pathname == '/' ? 'active' : ''}`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link activeClassName="active" href="/emprestimo">
                <a
                  className={`nav-link ${router.pathname == '/emprestimo' ? 'active' : ''}`}
                >
                  Empréstimo
                </a>
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link activeClassName="active" href="/fgts">
                <a
                  className={`nav-link ${router.pathname == '/fgts' ? 'active' : ''}`}
                >
                  FGTS
                </a>
              </Link>
            </li>
            {/* <li className='nav-item' onClick={closeMobileMenu}>
            <Link
                activeClassName='active'
                href='/auxilio-brasil'
              >
                <a className={`nav-link ${router.pathname == "/auxilio-brasil" ? "active" : ""}`} >Auxílio Brasil</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLScBeveHxeglbvr38am6FIliXA5IYSQ2Kp4JlXzr6AdWBFrYHw/viewform"
                className="nav-link"
                rel="noreferrer"
              >
                Trabalhe conosco
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                href="https://credestados.stormfin.com.br/"
                className="nav-link"
                rel="noreferrer"
              >
                Colaborador
              </a>
            </li>
            <Button
              variant="outlined"
              sx={{ marginLeft: isMobile ? '0' : '2rem' }}
              href={`https://wa.me/55${whatsapp}`}
              target="_blank"
              startIcon={<i className="fab fa-whatsapp" />}
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
