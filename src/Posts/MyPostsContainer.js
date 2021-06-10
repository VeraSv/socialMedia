import  './MyPosts.css';
import { addPostAC}  from '../Profile/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps =(state)=>{
  return {
    data:state.postData.data,
    newPostText:state.postData.newPostText
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{ addPostAC:(newPostBody)=>{
    dispatch(addPostAC(newPostBody))
  } }
}
   
const MyPostsContainer = connect(mapStateToProps ,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
