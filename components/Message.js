import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css'
//import {events} from './events';


class Message extends React.PureComponent {

  render (){
    return (
    
           <div className='message'>
            {this.props.message}
           </div>);
}
}

export default Message;
