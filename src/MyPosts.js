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
  postData:PropTypes.array
   
    
  }

  newText=null;

  addMes=(ref)=>{
this.newText=ref;
  }
changeText=()=>{
  let text=this.newText.value;
  this.props.updateNewPostText(text);
  
}
addText=()=>{
  
  this.props.addPost();

}

  render (){
    var post=this.props.postData.data.map(i=><Post key={i.id} message={i.message} likesCount={i.likesCount} />)
    return (
      <div className='myPost'>
      
       <div>
           <textarea defaultValue={this.props.postData.newPostText} onChange={this.changeText} ref={this.addMes}></textarea>
           <div>
           <button onClick={this.addText}>Add post</button>
             </div>

        </div>
        {post}
      </div>);
}
}

export default MyPosts;
