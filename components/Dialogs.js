import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css'
//import {events} from './events';
import DialogItem from './DialogItem';
import Message from './Message';

class Dialogs extends React.PureComponent {
userData= [
  {id:1, name:'Slava'}, {id:2, name:'Anna'}, {id:3, name:'Vasja'},{id:4, name:'Sasha'}
];
massagesData=[{id:1, massage:'Hi'},{id:2, massage:'How are you'},{id:3, massage:'Have a good day!'}]
  render (){
  var user=this.userData.map(i=>{return <DialogItem key={i.id} id={i.id} name={i.name} />})
  var message=this.massagesData.map(i=>{return <Message key={i.id} id={i.id} message={i.message} />});
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
