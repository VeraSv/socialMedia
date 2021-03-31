"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import MyPostsContainer from './MyPostsContainer';
//import {events} from './events';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from './profile-reducer' 
import Header from './Header'
import {setUserData} from './auth_reducer'

class HeaderContainer extends React.PureComponent {
   componentDidMount () {
   
    
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).
       then(responce =>{
           if(responce.data.resultCode==0) {
            let {id,email,login}=responce.data.data   
            this.props.setUserData(id,email,login)}
          });
   }
       render(){
    
          return(  
         <Header {...this.props}/>
                   
       )
        
       }
    }

   let mapStateToProps=(state)=>({isAuth:state.auth.isAuth,login:state.auth.login})
  
    export default connect(mapStateToProps,{setUserData})(HeaderContainer)