import React from 'react';
import PropTypes from 'prop-types';
//import  './Dialogs.css'
//import {events} from './events';

import {NavLink} from 'react-router-dom';


class DialogItem extends React.PureComponent {
static propTypes={
  id:PropTypes.number,
  name:PropTypes.string
}
  render (){
    return (
    
     <div>
        <NavLink to={'dialog/'+this.props.name} className='dialog active'>
             {this.props.name}
        </NavLink>
       
        </div> );
}
}

export default DialogItem;
