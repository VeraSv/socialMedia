import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css'
//import {events} from './events';
import Dialogs from './Dialogs';
import {messageChange} from './dialogs-reducer';
import {addMessage} from './dialogs-reducer';
import {connect} from 'react-redux' ;


let mapStateToProps =(state)=>{
  return {
    userData:state.dialogsData.userData,
    messagesData:state.dialogsData.messagesData
  }
  }
  
  /*let mapDispatchToProps =(dispatch)=>{
  return {
    messageChange: (text)=>{
      dispatch(updateNewMessageBodyCreator(text))
    },
    addMessage:()=>{
      dispatch(sendMessageCreator())
    }

  }
  }*/

const DialogsContainer = connect(mapStateToProps,{
  messageChange,
  addMessage})(Dialogs);

export default DialogsContainer;
