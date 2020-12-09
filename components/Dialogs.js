import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css'
//import {events} from './events';
import DialogItem from './DialogItem';
import Message from './Message';

class Dialogs extends React.PureComponent {
  static propTypes={
    userData:PropTypes.array,
    messagesData:PropTypes.array
  }
/*userData= [
  {id:1, name:'Slava'}, {id:2, name:'Anna'}, {id:3, name:'Vasja'},{id:4, name:'Sasha'}
];*/
/*messagesData=[{id:1, message:'Hi'},{id:2, message:'How are you'},{id:3, message:'Have a good day!'}]*/
  render (){
  var user=this.props.userData.map(i=>{return <DialogItem key={i.id} id={i.id} name={i.name} />})
  var message=this.props.messagesData.map(i=>{return <Message key={i.id} id={i.id} message={i.message} />});
    return (
    <div className='dialogs'>
      <div className='dialogs_items'>
        {user}
      </div>
          <div className='messages'>
           {message}
          </div>
     
    </div>);
}
}

export default Dialogs;
