import React from 'react';
import PropTypes from 'prop-types';
import  './Dialogs.css'
//import {events} from './events';

import {NavLink} from 'react-router-dom';


class DialogItem extends React.PureComponent {
static propTypes={
  id:PropTypes.number,
  name:PropTypes.string,
  img:PropTypes.string
}
  render (){
    return (
    
     <div className='user'>
       <img src={this.props.img} />
        <NavLink to={'dialog/'+this.props.name} className='dialog active'>
        
             {this.props.name}
        </NavLink>
       
        </div> );
}
}

export default DialogItem;
