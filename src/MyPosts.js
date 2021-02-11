"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css';
import {addPostActionCreator} from './profile-reducer';
import {updateNewPostTextActionCreator}  from './profile-reducer';
//import {events} from './events';
import Post from './Post';

class MyPosts extends React.PureComponent {
 static propsTypes={
  updateNewPostText:PropTypes.object,
  addPost:PropTypes.func,
  data:PropTypes.array,
   newPostText:PropTypes.string
    
  }

  newText=React.createRef();

 changeText=()=>{
  let text=this.newText.current.value;
  this.props.updateNewPostText(text);
  
}
addText=()=>{
  
  this.props.addPost();

}

  render (){
    var post=this.props.data.map(i=><Post key={i.id} message={i.message} likesCount={i.likesCount} />)
    return (
      <div className='myPost'>
      
       <div>
           <textarea value={this.props.newPostText} onChange={this.changeText} ref={this.newText}></textarea>
           <div>
           <button onClick={this.addText}>Add post</button>
             </div>

        </div>
        {post}
      </div>);
}
}

export default MyPosts;
