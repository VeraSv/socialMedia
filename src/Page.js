import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom'; 
import  './Page.css'

import Header from './Header';
import Navbar from './Navbar';
import ProfileContainer from './ProfileContainer';
import DialogsContainer from './DialogsContainer';
import UsersContainer from './UsersContainer';


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
          
          <Route path='/profile/:userId?' exact component={()=><ProfileContainer  />}/>
          <Route path='/dialogs' component={()=> <DialogsContainer   />}/>
          <Route path='/users' component={()=> <UsersContainer />} />
         </div>
       
      </div>
     </BrowserRouter>
     );
}
}

export default Page;
