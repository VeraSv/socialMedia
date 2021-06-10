import React from 'react';
import './Profile.css';
import MyPostsContainer from '../Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

class Profile extends React.PureComponent {
   
   render(){
      return(   <div >
         <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
         <MyPostsContainer  />
      </div>)
   }
}
    
export default Profile