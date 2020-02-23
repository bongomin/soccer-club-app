import React from 'react';
import { ClubLogo } from '../utills/icons'


// footer stateless component
const Footer = () => {
   return (
      <footer className="bck_blue">
         <div className="footer_logo">
            <ClubLogo
               width="70px"
               height="70px"
               link={true}
               linkTo="/"
            />
         </div>
         <div className="footer_discl">
            Funtula FootBall Club @ 2020 . All rights Reserved.
         </div>

      </footer>
   )
}

export default Footer;