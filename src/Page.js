import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom'; 
import  './Page.css'

import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
import DialogsContainer from './DialogsContainer';


class Page extends React.PureComponent {
  /*static propTypes={
    info:PropTypes.object,
    dispatch:PropTypes.func

  }*/
  render (){
    return (
     <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
        <Navbar/>
        <div className='content'>
          <Route path='/' exact component={()=><Profile  />}/>
          <Route path='/dialogs' component={()=> <DialogsContainer   />}/>
          
        </div>
       
      </div>
     </BrowserRouter>
     );
}
}

export default Page;
