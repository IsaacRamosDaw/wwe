import React from 'react'
import './footer.css'
import { faFacebook,faGithub, faTwitch, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const block = (t, p1, d1, p2, d2, p3, d3, p4, d4, p5, d5) => {

      return (
        <div className='fBlock'>
            <h3>{t}</h3>
            <ul>
              <li><a href={d1}>{p1}</a></li>
              <li><a href={d2}>{p2}</a></li>
              <li><a href={d3}>{p3}</a></li>
              <li><a href={d4}>{p4}</a></li>
              <li><a href={d5}>{p5}</a></li>
            </ul> 
          </div>
      )
    }

    return (
        <footer>
            {block('CORPORATE', 'Home', '/home', 'Careers', '/home', 'Impact', '/home', 'Contact', '/home')}
            {block('SOCIAL', 'YouTube', 'https://www.youtube.com/@WWE', 'Twitter', 'https://twitter.com/WWE?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', 'Github', 'https://github.com/IsaacRamosDaw/wwe', 'Pinterest', 'https://www.pinterest.es/morellpardo/wwe/')}
            {block('CONTENT', 'WWE News', 'WWE videos', 'WWE Photos', 'WWE Worldwide', 'Priority Pass')}
            {block('INFORMATION', 'Cookie policy', '/cookies', 'Privacy policy', '/privacy', 'Security', '/security')}
            <div className='fLogo'><img src="/images/header/wweLogo.png" alt="" /></div>
        </footer>
    )
}

export default Footer