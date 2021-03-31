import React from 'react';
import PropTypes from 'prop-types';
//import {events} from './events';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.PureComponent {

  render() {
    
    return (
      <header className='header'>
          <img src='https://i7.pngguru.com/preview/593/502/539/logo-canon-clip-art-icon-round-logo-design.jpg'/>
          <div className='login'>
            {this.props.isAuth?this.props.login: <NavLink to='/login'>Login</NavLink>}
           
          </div>
        
        </header>
    );

  }

}

export default Header;
