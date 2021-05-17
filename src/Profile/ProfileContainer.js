import React from 'react';
import './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from './profile-reducer' 
import {Redirect, withRouter} from 'react-router-dom'

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

let AuthRedirectComponent = (props) =>{
   /*if(!this.props.isAuth) return <Redirect to={'/login'} />*/
  return <ProfileContainer {...props} />
}

let mapStateToProps=(state)=>({profile:state.postData.profile,
isAuth:state.auth.isAuth})
let withUrlDataProfile= withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(withUrlDataProfile)