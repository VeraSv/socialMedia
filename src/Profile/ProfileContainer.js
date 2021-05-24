import React from 'react';
import './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from './profile-reducer' 
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.PureComponent {
   componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId) {userId=''}
    this.props.getUserProfile(userId)
   }
      
   render(){
    
    return(  
      <Profile {...this.props} profile={this.props.profile}/>
    )
   }
}
 


let mapStateToProps=(state)=>({
profile:state.postData.profile})
export default compose(connect(mapStateToProps, {getUserProfile}),withRouter,withAuthRedirect)(ProfileContainer)
