import React from 'react';
import './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile,setStatus,getStatus,updateStatus} from './profile-reducer' 
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getProfile,getStatusProfile, getAuthorizedUser, getIsAuth } from  './profile-selectors'

class ProfileContainer extends React.PureComponent {
   componentDidMount(){
    let userId = this.props.match.params.userId;
    //if (!userId) {userId=this.props.authorizedUser; if(!userId) {this.props.history.push("/login")}}
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
   }
      
   render(){
    
    return(  
      
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
   }
}
 


let mapStateToProps=(state)=>({
profile:getProfile(state),
status:getStatusProfile(state),
authorizedUser:getAuthorizedUser(state),
isAuth:getIsAuth(state)})
export default compose(connect(mapStateToProps, {getUserProfile, setStatus, getStatus,updateStatus}),withRouter,withAuthRedirect)(ProfileContainer)
