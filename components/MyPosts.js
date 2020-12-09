import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css'
//import {events} from './events';
import Post from './Post';

class MyPosts extends React.PureComponent {
 static propsTypes={
    postData:PropTypes.array
  }
  render (){
    var post=this.props.postData.map(i=><Post key={i.id} message={i.message} likesCount={i.likesCount} />)
    return (
      <div className='myPost'>
       Post
       <div>
           <textarea></textarea>
           <div>
           <button>Add post</button>
             </div>

        </div>
        {post}
      </div>);
}
}

export default MyPosts;
