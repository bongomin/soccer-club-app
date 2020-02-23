import React from 'react';
import { Link } from 'react-router-dom';
import mcitilogo from '../../Resources/images/logos/manchester_city_logo.png'


export const ClubLogo = (props) => {
   // a template that returns the logo
   const template = <div className="img_cover" style={{
      width: props.width,
      height: props.height,
      background: `url(${mcitilogo}) no-repeat`
   }}></div>
   if (props.link) {
      // return link if link provided
      return (
         <Link to={props.linkTo} className="link_logo">
            {template}
         </Link>
      )
   }
   else {
      // return template without link if no link provided
      return template

   }

}