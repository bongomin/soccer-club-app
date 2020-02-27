import React, { Component } from 'react'
// importing the easePolyOut parckage for animations
import { easePolyOut } from 'd3-ease';
// this is for animation
import { Animate } from 'react-move'


class Stripes extends Component {
   state = {
      stripes: [
         {
            background: '#98c5e9',
            left: 120,
            rotate: 25,
            top: -260,
            delay: 0
         },
         {
            background: '#ffffff',
            left: 360,
            rotate: 25,
            top: -397,
            delay: 200
         },
         {
            background: '#98c5e9',
            left: 600,
            rotate: 25,
            top: -498,
            delay: 400
         }
      ]
   }
   // showStripes function which is returned inside the render 
   showStripes = () => (
      this.state.stripes.map((stripe, i) => (
         <Animate
            key={i}
            show={true}
            start={{
               background: '#ffffff',
               opacity: 0,
               left: 0,
               rotate: 0,
               top: 0
            }}
            enter={{
               background: [stripe.background],
               opacity: [1],
               left: [stripe.left],
               rotate: [stripe.rotate],
               top: [stripe.top],
               timing: {
                  delay: stripe.delay, duration: 300, ease: easePolyOut
               },
               events: {
                  end() {
                     // this is used to handle events ocuring in the animation
                     console.log('animation finished ')
                  }
               }
            }}
         >
            {({ left, top, rotate, opacity, background }) => {
               return (
                  <div
                     className="stripe"
                     style={{
                        background,
                        opacity,
                        transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
                     }}
                  ></div>
               )
            }}

         </Animate>

      ))
   )

   render() {
      return (
         <div className="featured_stripes">
            {this.showStripes()}
         </div>
      )
   }
}

export default Stripes
