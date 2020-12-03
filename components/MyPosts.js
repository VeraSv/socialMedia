import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css'
//import {events} from './events';
import Post from './Post';

class MyPosts extends React.PureComponent {
  render (){
    return (
      <div >
       Post
       <div>
           <textarea></textarea>
           <button>Add post</button>

        </div>
        <Post message='Hi!'  likesCount='5'/> 
        <Post message='How are you?' likesCount='0'/> 
      </div>);
}
}

export default MyPosts;
