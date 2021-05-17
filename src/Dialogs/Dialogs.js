import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css';
import DialogItem from './DialogItem';
import Message from '../Message/Message';
import { Redirect } from 'react-router';

class Dialogs extends React.PureComponent {
  static propTypes={
    userData:PropTypes.array,
    messagesData:PropTypes.object,
    addMessage:PropTypes.func,
    messageChange:PropTypes.func
  }

  newMes=React.createRef();

  addMessage=()=>{
    this.props.addMessage();
  }

  onNewMessageChange=()=>{
    let text= this.newMes.current.value;
    this.props.messageChange(text);
  }

  render (){
    var user=this.props.userData.map(i=>{return <DialogItem  key={i.id} id={i.id} name={i.name} img={i.img}/>})
    var message=this.props.messagesData.data.map(i=>{return <Message  key={i.id} id={i.id} message={i.message} />});
   /*if(!this.props.isAuth) {return <Redirect to={'/login'} />}*/
    return (
      <div className='dialogs'>
       <div className='dialogs_items'>
         {user}
       </div>
       <div className='messages'>
          {message }
          <div className='addMess'>
             <textarea value ={this.props.messagesData.newMessageBody}  ref={this.newMes} onChange={this.onNewMessageChange}></textarea>
             <div>
               <button onClick={this.addMessage}>Add post</button>
             </div>
          </div>
       </div>
      </div>);
  }
}

export default Dialogs;
