import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css';
import DialogItem from './DialogItem';
import Message from '../Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { requiredField,maxLengthCreator } from '../Utils/validator';
import {Textarea} from '../Forms/FormsControl'
const maxLenght=maxLengthCreator(50)
class Dialogs extends React.PureComponent {
  static propTypes={
    userData:PropTypes.array,
    messagesData:PropTypes.object,
    addMessage:PropTypes.func,
    
  }

  addNewMessage =(values)=>{
    this.props.addMessage(values.newMessageBody);
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
          <AddMessageForm onSubmit={this.addNewMessage}/>
       </div>
      </div>);
  }
}
const MessageForm=(props)=>{
 //const {handleSubmit}=props
  return <form className='addMess' onSubmit={props.handleSubmit}>
    <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[requiredField,maxLenght ]}/>
  <div>
    <button type='submit'>Add post</button>
  </div>
</form>
}
const   AddMessageForm =reduxForm({form:'dialogAddMessageForm'})( MessageForm)
export default Dialogs;
