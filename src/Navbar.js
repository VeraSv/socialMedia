import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
//import {events} from './events';
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
          <div className='friends'>
            <div className='friend'>
              <img src='https://c7.hotpng.com/preview/596/915/779/computer-icons-potter-dix-elementary-school-male-others.jpg'/>
              <span>Slava</span>
              </div>
              <div className='friend'>
              <img src='https://www.pikpng.com/pngl/b/417-4172348_testimonial-user-icon-color-clipart.png'/>
              <span>Petya</span>
              </div>
              <div className='friend'>
              <img src='https://img2.freepng.ru/20180409/qiw/kisspng-computer-icons-user-profile-man-icon-5acb93284c3aa4.6118851515232909203123.jpg'/>
              <span>Ivan</span>
              </div>
              </div> 
        </nav>
        )
        
       }
    }
    export default Navbar