import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import InfoPage from '../../../components/main/cInfopages/InfoPage'

function Privacy() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
        <InfoPage title='Privacy Policy' 
        text='We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you use our website.

        When you visit our site, we may collect information such as your IP address, browser type, and browsing behavior. This data is used to analyze trends, track user interactions, and improve the user experience on our site.
        
        We may also collect personal information, such as your name and email address, when you voluntarily provide it to us by filling out forms or signing up for newsletters. This information is used to communicate with you, provide requested services, and improve our offerings.' 

        text2='Your personal data is stored securely and is only accessible to authorized personnel. We do not share your information with third parties without your consent, except as required by law.

        You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please contact us using the information provided on our website.
        
        We use appropriate security measures to protect your data from unauthorized access, disclosure, or loss. However, please be aware that no method of data transmission over the internet is 100% secure.' 

        text3='Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party sites and encourage you to review their respective privacy policies.

        By using our site, you consent to the practices described in this Privacy Policy. We reserve the right to update this policy at any time, so please review it periodically for changes.
        
        If you have any questions or concerns about our Privacy Policy, please feel free to contact us. We are here to assist you.'/>
      <Footer/>
    </>
  )
}

export default Privacy