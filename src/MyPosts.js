"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css';
import Post from './Post';

class MyPosts extends React.PureComponent {
 static propsTypes={
  updateNewPostTextAC:PropTypes.object,
  addPostAC:PropTypes.func,
  data:PropTypes.array,
   newPostText:PropTypes.string
    
  }

  newText=React.createRef();

 changeText=()=>{
  let text=this.newText.current.value;
  this.props.updateNewPostTextAC(text);
  
}
addText=()=>{
  
  this.props.addPostAC();

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
