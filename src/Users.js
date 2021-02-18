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
        let getUsers=()=>{
            if(this.props.users.length==0){
                axios.get("https://social-network.samuraijs.com/api/1.0/users").
                then(responce =>{this.props.setUsersAc(responce.data.items)});
            }
        }
        
        return (
            <div>
                <button onClick={getUsers}>Get users</button>
               { this.props.users.map(u => { return (
                <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small ? u.photos.small: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                        </div>
                        <div>
                           {u.followed? <button onClick={()=>this.props.unfollowed(u.id)}>Unfollow</button>: <button onClick={()=>this.props.followed(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                        <span>{u.name}</span>
                        <span>{u.status? u.status:' boss'}</span>
                        </div>
                        <div>
                        <span>city</span>
                        <span> country</span>
                        </div>
                    </div>
                </div> )})}
            </div>
        );
        }
    }
    export default Users;