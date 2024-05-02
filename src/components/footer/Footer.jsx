import React from 'react'
import './footer.css'

function Footer() {
    const block = (t, p1, p2, p3, p4,p5) => {

      return (
        <div className='fBlock'>
            <h3><a href="">{t}</a></h3>
            <ul>
              <li><a href="*">{p1}</a></li>
              <li><a href="*">{p2}</a></li>
              <li><a href="*">{p3}</a></li>
              <li><a href="*">{p4}</a></li>
              <li><a href="*">{p5}</a></li>
            </ul> 
          </div>
      )
    }

    return (
        <footer>
            {block('CORPORATE', 'Corporate', 'Careers', 'Impact', 'Contact')}
            {block('WWE.COM', 'WWE News', 'WWE videos', 'WWE Photos', 'WWE Worldwide', 'Priority Pass')}
            {block('WWE.COM', 'WWE News', 'WWE videos', 'WWE Photos', 'WWE Worldwide', 'Priority Pass')}
            {block('WWE.COM', 'WWE News', 'WWE videos', 'WWE Photos', 'WWE Worldwide', 'Priority Pass')}
            <div className='fLogo'>
              
            </div>
        </footer>
    )
}

export default Footer