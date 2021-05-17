import React from 'react';
import './Profile.css';
import MyPostsContainer from '../Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

class Profile extends React.PureComponent {
   
   render(){
      return(   <div >
         <ProfileInfo profile={this.props.profile}/>
         <MyPostsContainer  />
      </div>)
   }
}
    
export default Profile