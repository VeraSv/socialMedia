import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css';
import Post from './Post';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLengthCreator } from '../Utils/validator';
import { Textarea } from '../Forms/FormsControl';
const maxLenght= maxLengthCreator(10);

class MyPosts extends React.PureComponent {
 static propsTypes={
   addPostAC:PropTypes.func,
   data:PropTypes.array,
   newPostText:PropTypes.string 
  }

    
  addText=()=>{
   this.props.addPostAC();
  }
  addNewPost=(values)=>{
    this.props.addPostAC(values.newPostBody);
  }

  render (){
    var post=this.props.data.map(i=><Post key={i.id} message={i.message} likesCount={i.likesCount} />)
    return (
      <div className='myPost'>
        <AddPostForm onSubmit={this.addNewPost} />
        
        {post}
      </div>);
  }
}
const PostForm=(props)=>{
  //const {handleSubmit}=props
   return <form className='addPost' onSubmit={props.handleSubmit}>
     <Field component={Textarea} name='newPostBody' placeholder='Enter your message' validate={[requiredField, maxLenght]}/>
   <div>
     <button type='submit'>Add post</button>
   </div>
 </form>
 }
 const   AddPostForm =reduxForm({form:'postAddMessageForm'})( PostForm)
export default MyPosts;
