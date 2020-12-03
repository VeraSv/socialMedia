import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.module.css'
import {events} from './events';
import { NavLink } from 'react-router-dom';


class Navbar extends React.PureComponent{

       render(){
        
          return(   <nav className='nav'>
          <div className='item'>
            <NavLink to='/' exact activeClassName='active'>Profile</NavLink>
          </div>
          <div className='item'>
            <NavLink to='/dialogs' activeClassName='active'>Messages</NavLink>
          </div>
          <div className='item'>
            <NavLink to='/news' activeClassName='active'>News</NavLink>
          </div>
          <div className='item'>
            <NavLink to='/music' activeClassName='active'>Music</NavLink>
          </div>
          <div className='item'>
            <NavLink to='/settings' activeClassName='active'>Settings</NavLink>
          </div>
        </nav>)
        
       }
    }
    export default Navbar