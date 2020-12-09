import React from 'react';
import PropTypes from 'prop-types';
//import  './Dialogs.css'
//import {events} from './events';


class Message extends React.PureComponent {
  static propTypes={
    id:PropTypes.number,
    message:PropTypes.string
  }
  render (){
    return (
    
           <div className='message'>
            {this.props.message}
           </div>);
}
}

export default Message;
