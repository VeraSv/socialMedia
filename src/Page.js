import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'; 
import  './Page.css'
import HeaderContainer from './Header/HeaderContainer';
import Navbar from './Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/login';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {getAuthUserData} from './auth_reducer'
import {initializeApp} from './app_reducer'

class Page extends React.PureComponent {
 componentDidMount(){
   getAuthUserData();
 }
  render (){
    //if(!this.props.initialized) {return <img src='https://icons8.com/preloaders/preloaders/1474/Walk.gif'/>}
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
const mapStateToProps=(state)=>({initialized:state.app.initialized})
export default compose( connect(mapStateToProps,{initializeApp}))(Page);
