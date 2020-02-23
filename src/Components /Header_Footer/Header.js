import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ClubLogo } from '../utills/icons'
import '../../Resources/css/app.css';

class Header extends Component {
   render() {
      return (
         <AppBar
            position="fixed"
            style={{
               background: "#98c5e9",
               padding: "10px 0",
               borderBottom: "2px solid #00285e"
            }}
         >
            <Toolbar style={{ display: 'flex' }}>
               {/* div containing my logo */}
               <div style={{ flexGrow: 1 }}>
                  <div>
                     <div className="header_logo">
                        <ClubLogo link={true} linkTo="/"
                           width="70px"
                           height="70px"
                        />
                     </div>
                  </div>
               </div>
               {/* using the Link to direct to different Routes */}
               <Link to="/the_team">
                  {/* using the Button from material Ui */}
                  <Button color="inherit">The Team</Button>
               </Link>
               <Link to="/the_matches">
                  {/* using the Button from material Ui */}
                  <Button color="inherit">
                     Matches
                  </Button>
               </Link>
               <Link to="/about">
                  {/* using the Button from material Ui */}
                  <Button color="inherit">
                     About
                  </Button>
               </Link>
               <Link to="/contact">
                  {/* using the Button from material Ui */}
                  <Button color="inherit">
                     Contacts
                  </Button>
               </Link>
            </Toolbar>
         </AppBar>
      )
   }
}

export default Header
