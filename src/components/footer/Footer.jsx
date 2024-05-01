import React from 'react'
import './footer.css'

function Footer() {
    const block = (t, p1, p2, p3, p4 ) => {

      return (
        <div className='fBlock'>
            <h3>{t}</h3>
            <ul>
              <li>{p1}</li>
              <li>{p2}</li>
              <li>{p3}</li>
              <li>{p4}</li>
            </ul> 
          </div>
      )
    }


    return (
        <footer>
            {block('CORPORATE', 'a', 'b', 'a', 'c' , 'd')}
            {block('WWE.COM', 5, 'Elemento de lista')}
            {block('ABOUT', 5, 'Elemento de lista')}
            {block('HELP', 5, 'Elemento de lista')}
            <div className='fLogo'>
              
            </div>
        </footer>
    )
}

export default Footer