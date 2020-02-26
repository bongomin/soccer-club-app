import React, { Component } from 'react';
// importing the easePolyOut parckage for animations
import { easePolyOut } from 'd3-ease';
// this is for animation
import { Animate } from 'react-move'
import { render } from '@testing-library/react';
import FeaturedPlayer from '../../../Resources/images/featured_player.png'

class Text extends Component {

   // function for animating the Figure 6
   animateNumber = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
            rotate: 0

         }}

         enter={{
            opacity: [1],
            rotate: [360],
            timing: { duration: 1000, ease: easePolyOut }
         }}
      >
         {({ opacity, rotate }) => {
            return (
               <div className="featured_number"
                  style={{
                     opacity,
                     transform: `translate(260px,170px)rotateY(${rotate}deg)`

                  }}
               >
                  6
               </div>
            )
         }}

      </Animate>
   )
   // function for animating the text after the figure
   animateFirst = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
            x: 503,
            y: 450,
            rotate: 0

         }}

         enter={{
            opacity: [1],
            x: [273],
            y: [450],
            timing: { duration: 500, ease: easePolyOut }
         }}
      >
         {({ opacity, x, y }) => {
            return (
               <div className="featured_second"
                  style={{
                     opacity,
                     transform: `translate(${x}px,${y}px)`

                  }}
               >
                  FootBall
            </div>
            )
         }}

      </Animate>

   )

   // function to animate the second text after the first text

   AnimateSecond = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
            x: 503,
            y: 586,
            rotate: 0

         }}

         enter={{
            opacity: [1],
            x: [273],
            y: [586],
            timing: { delay: 400, duration: 500, ease: easePolyOut }
         }}
      >
         {({ opacity, x, y }) => {
            return (
               <div className="featured_first"
                  style={{
                     opacity,
                     transform: `translate(${x}px,${y}px)`

                  }}
               >
                  Club  Banda
         </div>
            )
         }}

      </Animate>


   )

   // functio that animates a player
   AnimatePlayer = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
         }}

         enter={{
            opacity: [1],
            timing: { delay: 800, duration: 500, ease: easePolyOut }
         }}
      >
         {({ opacity, x, y }) => {
            return (
               <div className="featured_player"
                  style={{
                     opacity,
                     background: `url(${FeaturedPlayer})`,
                     transform: `translate(550px,201px)`

                  }}
               >

               </div>
            )
         }}

      </Animate>

   )


   render() {

      return (
         <div className="featured_text">
            {this.AnimatePlayer()}
            {this.animateNumber()}
            {this.animateFirst()}
            {this.AnimateSecond()}
         </div>
      )


   }

}
export default Text;

