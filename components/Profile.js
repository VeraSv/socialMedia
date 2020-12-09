import React from 'react';
import PropTypes from 'prop-types';
import './Profile.module.css';
import MyPosts from './MyPosts';
import {events} from './events';
import ProfileInfo from './ProfileInfo';
class Profile extends React.PureComponent {
   static propTypes={
      postData:PropTypes.array
   }
       render(){
    
          return(   <div >
         <ProfileInfo />
           <MyPosts postData={this.props.postData}/>
           
          </div>)
        
       }
    }
    export default Profile