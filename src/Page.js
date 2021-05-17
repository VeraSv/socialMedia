import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; 
import  './Page.css'
import HeaderContainer from './Header/HeaderContainer';
import Navbar from './Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/login';

class Page extends React.PureComponent {
 
  render (){
    return (
    <BrowserRouter>
     <div className='app-wrapper'>
       <HeaderContainer />
       <Navbar/>
       <div className='content'>
         <Route path='/profile/:userId?' exact component={()=><ProfileContainer  />}/>
         <Route path='/dialogs' component={()=> <DialogsContainer   />}/>
         <Route path='/users' component={()=> <UsersContainer />} />
         <Route path='/login' render ={()=><Login />} />
       </div>
     </div>
    </BrowserRouter>
    );
  }
}

export default Page;
