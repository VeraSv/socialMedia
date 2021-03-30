import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import './users.css';

import UserPresentation from './UserPresentation';
import spinner from './spinner.gif';

import * as axios from 'axios';

class Users extends React.PureComponent {
    static propsTypes={
        users:PropTypes.array,
        followed:PropTypes.func,
        unfollowed:PropTypes.func,
        setUsersAc:PropTypes.func
        }
        componentDidMount(){
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then(responce =>{
                this.props.setIsFetching(false)
                this.props.setUsersAc(responce.data.items)});
        }
        onPageChanged=(p)=>{this.props.setCurrentPage(p);
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).
            then(responce =>{
                this.props.setIsFetching(false)
                this.props.setUsersAc(responce.data.items);
                //this.props.setTotalUsersCount(responce.data.totalCount)
            });};
         
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
            onPageChanged={this.onPageChanged}  />
            </Fragment>
        );
        }
    }
    export default Users;