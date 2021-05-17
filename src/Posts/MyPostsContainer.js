import  './MyPosts.css';
import {updateNewPostTextAC, addPostAC}  from '../Profile/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps =(state)=>{
  return {
    data:state.postData.data,
    newPostText:state.postData.newPostText
  }
}
   
const MyPostsContainer = connect(mapStateToProps ,{ updateNewPostTextAC, addPostAC })(MyPosts);
export default MyPostsContainer;
