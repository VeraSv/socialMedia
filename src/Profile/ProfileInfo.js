import React from 'react';
import './Profile.css';
import ProfileStatus from './ProfileStatus'

class ProfileInfo extends React.PureComponent {
  
   render(){
      let user;
      if (!this.props.profile) {
      } else user= <div><img src={this.props.profile.photos.large }/> <span>{this.props.profile.fullName}</span>
         </div>
      return(   <div >
         <img className='fond' src='https://www.zastavki.com/pictures/originals/2014/Nature___Rivers_and_lakes_Turquoise_lake_in_the_mountains_083623_.jpg'/>
         <div className='user'><img src='https://avatars.mds.yandex.net/get-zen_doc/1101877/pub_5c4df87b3bf2f400af71e664_5c4df8a1c7d9c800ac6b672b/scale_1200'/>
         <ProfileStatus status={'Hi!'}/>
         </div>
         {user}
      </div>)
   }
}
export default ProfileInfo;