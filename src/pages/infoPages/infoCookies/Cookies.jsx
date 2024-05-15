import React from 'react'
import InfoPage from '../../../components/main/cInfopages/InfoPage'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
function Cookies() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
      <InfoPage
  title="Cookies Privacy"
  text='Our website uses cookies to enhance your experience and to help us understand how users interact with our site. By using our site, you agree to our cookie policy. We use cookies to collect data about your browsing habits, preferences, and to analyze traffic. You can manage or disable cookies in your browser settings. For more information, please review our full cookie policy.'

  text2='We use various types of cookies on our site. Essential cookies are necessary for the basic functionality of the website. Without them, certain features may not work correctly.'

  text3='Targeting and advertising cookies are used to deliver relevant ads and track the effectiveness of advertising campaigns. 
  You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, doing so may affect your experience on our site. For more detailed information on how to manage cookies, please refer to your browsers help section. If you have any questions about our cookie policy, please feel free to contact us.'/>
      <Footer/>
    </>
  )
}

export default Cookies


