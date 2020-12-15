import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css'
//import {events} from './events';
import Post from './Post';

class MyPosts extends React.PureComponent {
 static propsTypes={
    postData:PropTypes.array
  }
  newText=null;
  addMes=(ref)=>{
this.newText=ref;
  }
changeText=()=>{
  
}
addText=()=>{
  alert(this.newText.value)
}

  render (){
    var post=this.props.postData.map(i=><Post key={i.id} message={i.message} likesCount={i.likesCount} />)
    return (
      <div className='myPost'>
       Post
       <div>
           <textarea defaultValue='' onChange={this.changeText} ref={this.addMes}></textarea>
           <div>
           <button onClick={this.addText}>Add post</button>
             </div>

        </div>
        {post}
      </div>);
}
}

export default MyPosts;
