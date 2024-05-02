import React from 'react'
import './posts.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {} from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
function Posts({brand, titlePost}) {
  return (
    <section className='sPosts'>
      <div>
        
      </div>

      {/* <div className='postContainer'>
        <div className='info'>
          <div>
            <span className='pBrand'>{brand}</span>
            <ul className='pSocialIcons'>
              <li><a href=""><FontAwesomeIcon icon={faXTwitter}/></a></li>
              <li><a href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
              <li><a href=""><FontAwesomeIcon icon={faYoutube}/></a></li>
            </ul>
          </div>
            <p>{titlePost}</p>
        </div>
        <div className='pVideo'>
          a
          <iframe src="https://www.youtube.com/embed/xjZkxVYBVjY?si=Z8P5fkHmI8xXrnM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> 
      </div> */}
    </section>
  )
}

export default Posts