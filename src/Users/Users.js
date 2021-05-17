import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import './users.css';
import UserPresentation from './UserPresentation';

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
    }
    
    onPageChanged=(p)=>{this.props.setCurrentPage(p);
        this.props.getUsersThunkCreator(p,this.props.pageSize);
    };
         
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
            toggleFollowingProgress={this.props.toggleFollowingProgress} 
            unfollowThunk={this.props.unfollowThunk}
            followThunk={this.props.followThunk}/>
        </Fragment>
       );
    }
}
export default Users;