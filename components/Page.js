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
  static propTypes={
    info:PropTypes.object

  }
  render (){
    return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <div className='content'>
          <Route path='/' exact component={()=><Profile postData={this.props.info.postData}/>}/>
          <Route path='/dialogs' component={()=> <Dialogs userData={this.props.info.userData} messagesData={this.props.info.messagesData}/>}/>
          
        </div>
       
      </div>
      </BrowserRouter>);
}
}

export default Page;
