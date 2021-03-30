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
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.PureComponent {
   componentDidMount(){
   let userId = this.props.match.params.userId;
   if (!userId) {userId=''}
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).
      then(responce =>{
          this.props.setUserProfile(responce.data)
         });
  }
       render(){
    
          return(  
         <Profile {...this.props} profile={this.props.profile}/>
           
           
       )
        
       }
    }

    let mapStateToProps=(state)=>({profile:state.postData.profile})
   let withUrlDataProfile= withRouter(ProfileContainer)
    export default connect(mapStateToProps, {setUserProfile})(withUrlDataProfile)