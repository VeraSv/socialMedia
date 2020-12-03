import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom'; 
import  './Page.css'
//import {events} from './events';
import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
import Dialogs from './Dialogs';


class Page extends React.PureComponent {
  render (){
    return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <div className='content'>
          <Route path='/' exact component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          
        </div>
       
      </div>
      </BrowserRouter>);
}
}

export default Page;
