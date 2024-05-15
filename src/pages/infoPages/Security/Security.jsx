import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import InfoPage from '../../../components/main/cInfopages/InfoPage'

function Security() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
        <InfoPage 
          title='Security'

          text='WWE has implemented enhanced security measures to ensure the safety and well-being of all those attending our events.

          WrestleMania 34 Security Notice: WWE has instituted a clear bag policy for WrestleMania, as well as for Raw and SmackDown LIVE at the Smoothie King Center in the days following WrestleMania. More detailed information about this policy can be found on our website.
          
          Doors for events will open approximately 90 minutes prior to showtime to facilitate smooth entry for fans and avoid delays due to the enhanced screening process. All attendees will need to pass through a metal detector and/or undergo a handheld wand search before entering the venue.'

          text2='Bags larger than 14” x 14” x 6” are not permitted, and all bags are subject to search. This policy is in place to minimize security risks and expedite the entry process for everyone.
          '

          text3='Exceptions may be made for medically necessary items. If you have any medical needs, please contact the venue ahead of time to discuss your specific requirements.
          

          WWE values the cooperation and understanding of our fans as we work together to create a safe and secure environment for everyone. We look forward to seeing all our fans at WWE live events, and we thank you for your cooperation in following these enhanced security measures.'          
        />
      <Footer/>
    </>
  )
}

export default Security