import React from 'react';
import PropTypes from 'prop-types';
import  './Message.css'
//import {events} from './events';


class Message extends React.PureComponent {
  static propTypes={
    id:PropTypes.number,
    message:PropTypes.string
  }
  render (){
    return (
    
           <div className='message'>
             
            <span>{this.props.message}</span>
           </div>);
}
}

export default Message;
