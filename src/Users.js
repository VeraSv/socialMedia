import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import './users.css';
import {userApi} from './API'
import UserPresentation from './UserPresentation';
import spinner from './spinner.gif';

import * as axios from 'axios';

class Users extends React.PureComponent {
    static propsTypes={
        users:PropTypes.array,
        followed:PropTypes.func,
        unfollowed:PropTypes.func,
        setUsersAc:PropTypes.func,
        toggleFollowingProgress:PropTypes.func,
        getUsersThunkCreator:PropTypes.func
        }
        componentDidMount(){
           this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
           /* this.props.setIsFetching(true)
            userApi.getUsers(this.props.currentPage,this.props.pageSize).
            then(responce =>{
                this.props.setIsFetching(false)
                this.props.setUsersAc(responce.items)});*/
               
}

        
        onPageChanged=(p)=>{this.props.setCurrentPage(p);
           
            this.props.getUsersThunkCreator(p,this.props.pageSize)
            ;};
         
    render (){     
         
        return (
        <Fragment>
        {this.props.isFetching ? <img src='https://icons8.com/preloaders/preloaders/1474/Walk.gif'/>:null}
           <UserPresentation users={this.props.users}
            followed={this.props.followed}
            unfollowed={this.props.unfollowed}
            setUsersAc={this.props.setUsersAc}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged} 
            followingProgress={this.props.followingProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress} />
            </Fragment>
        );
        }
    }
    export default Users;