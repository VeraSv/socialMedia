import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import MyPosts from './MyPosts';
//import {events} from './events';
class ProfileInfo extends React.PureComponent {
   
       render(){
      
          return(   <div >
          <img className='fond' src='https://www.zastavki.com/pictures/originals/2014/Nature___Rivers_and_lakes_Turquoise_lake_in_the_mountains_083623_.jpg'/>
         <div className='user'><img src='https://avatars.mds.yandex.net/get-zen_doc/1101877/pub_5c4df87b3bf2f400af71e664_5c4df8a1c7d9c800ac6b672b/scale_1200'/>
           </div>
          
          </div>)
        
       }
    }
    export default ProfileInfo;