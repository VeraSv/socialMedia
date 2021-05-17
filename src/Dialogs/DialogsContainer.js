import  './Dialogs.css'
import Dialogs from './Dialogs';
import {messageChange} from './dialogs-reducer';
import {addMessage} from './dialogs-reducer';
import {connect} from 'react-redux' ;

let mapStateToProps =(state)=>{
  return {
    userData:state.dialogsData.userData,
    messagesData:state.dialogsData.messagesData,
    isAuth: state.auth.isAuth
  }
}

let AuthRedirectComponent = (props) =>{
  /*if(!this.props.isAuth) return <Redirect to={'/login'} />*/
 return <DialogsContainer {...props} />
}

const DialogsContainer = connect(mapStateToProps,{messageChange,addMessage})(AuthRedirectComponent);

export default DialogsContainer;
