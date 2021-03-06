import  './Dialogs.css'
import Dialogs from './Dialogs';
//import {messageChange} from './dialogs-reducer';
import {addMessage} from './dialogs-reducer';
import {connect} from 'react-redux' ;
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps =(state)=>{
  return {
    userData:state.dialogsData.userData,
    messagesData:state.dialogsData.messagesData,
    
  }
}
let mapDispatchToProps=(dispatch)=>{
  return {addMessage:(newMessageBody)=>{
    dispatch(addMessage(newMessageBody))}}
}
export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)
