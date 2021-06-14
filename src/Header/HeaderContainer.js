import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import {getAuthUserData} from '../auth_reducer';
import {logout} from '../auth_reducer'

class HeaderContainer extends React.PureComponent {
   componentDidMount () {
    this.props.getAuthUserData()
   }
       
   render(){
    return(  
    <Header {...this.props}/>
    )
   }
}

let mapStateToProps=(state)=>({isAuth:state.auth.isAuth,login:state.auth.login})
  
export default connect(mapStateToProps,{getAuthUserData, logout})(HeaderContainer)