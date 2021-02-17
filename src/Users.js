import React from 'react';
import PropTypes from 'prop-types';
import './users.css';
import * as axios from 'axios';

class Users extends React.PureComponent {
    static propsTypes={
        users:PropTypes.array,
        followed:PropTypes.func,
        unfollowed:PropTypes.func,
        setUsersAc:PropTypes.func
        }
        
    render (){
        if(this.props.users.length==0){
             axios.get("https://social-network.samuraijs.com/api/1.0/users").
             then(responce =>{this.props.users=responce.data.items});
         }
        return (
            <div>
               { this.props.users.map(u => { return (
                <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.img}/>
                        </div>
                        <div>
                           {u.followed? <button onClick={()=>this.props.unfollowed(u.id)}>Unfollow</button>: <button onClick={()=>this.props.followed(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                        <span>{u.fullName}</span>
                        <span>{u.status}</span>
                        </div>
                        <div>
                        <span>{u.location.city}</span>
                        <span>{u.location.country}</span>
                        </div>
                    </div>
                </div> )})}
            </div>
        );
        }
    }
    export default Users;