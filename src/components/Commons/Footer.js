import React from 'react'
import Link from 'next/link'
import { useScroll } from '../../hooks/useScroll'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { Stack } from '@mui/material'

function Footer() {
  const whatsapp = useWhatsApp()
  const scroll = useScroll()

  const isScrollAtBottom =
    typeof window !== 'undefined' &&
    window?.innerHeight + scroll >= document?.body.offsetHeight
  const showWhatsappButton = scroll > 50 && !isScrollAtBottom

  return (
    <footer className="bg--light-grey">
      <a
        target="_blank"
        href={`https://wa.me/55${whatsapp}`}
        id="whatsapp-icon"
        className={`${showWhatsappButton && 'display'} shadow-2`}
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.537323684257!2d-48.64222938440911!3d-26.981547502578376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8aa79ba3c9%3A0x581d0da1d710c19f!2sCred%20Estados%20Empr%C3%A9stimos%20Consignados!5e0!3m2!1spt-BR!2sbr!4v1637241714308!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="content">
        <div className="container">
          <div className="logo-social">
            <img src={'/images/logo-completa.webp'} alt="Logo" />
            <div className="social-icons">
              <a
                target="_blank"
                href={`https://wa.me/55${whatsapp}`}
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/credestados"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/credestados/"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="column navigation">
            <h3>Navegar</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/emprestimo">Empréstimo</Link>
              </li>
              <li>
                <Link href="/fgts">FGTS</Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScBeveHxeglbvr38am6FIliXA5IYSQ2Kp4JlXzr6AdWBFrYHw/viewform"
                  rel="noreferrer"
                >
                  Trabalhe conosco
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://credestados.stormfin.com.br/"
                  rel="noreferrer"
                >
                  Colaborador
                </a>
              </li>
            </ul>
          </div>
          <div className="column icons">
            <h3>Entre em contato</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="mailto:contato@credestados.com.br"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope" />
                  <span>contato@credestados.com.br</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="tel:(48) 9 9172-5508" rel="noreferrer">
                  <i className="fas fa-phone-alt"></i>
                  <span>(48) 9 9172-5508</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps?ll=-26.981552,-48.640041&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6349246038411362719"
                  rel="noreferrer"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Av. Atlântica, 1530 - Sala 05
                    <br />
                    Centro, Balneário Camboriú - SC
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ fontSize: 12 }}
          >
            <span>
              © {new Date().getFullYear()} | Fontanella Servicos LTDA |
              37.111.025/0001-72
            </span>

            <Link href="/termos-de-uso">
              <a style={{ textDecoration: 'underline' }}>Termos de Uso</a>
            </Link>

            <a
              href="https://guilhermehammes.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Desenvolvido por <img src={'/images/logo-gh.webp'} alt="" />
            </a>
          </Stack>
        </div>
      </div>
    </footer>
  )
}

export default Footer
