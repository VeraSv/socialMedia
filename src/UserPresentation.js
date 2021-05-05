import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './users.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userApi } from './API';

let UserPresentation=(props)=> {
    
    /*    componentDidMount(){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then(responce =>{this.props.setUsersAc(responce.data.items)});
        }*/
      
       
        let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
        let pages= [];
        for (let i=1;i<=pagesCount; i++ ) {
            pages.push(i)
        }
        
         
        return (
            <div>
                <div>
                    {pages.map(p => {return (<span className={props.currentPage==p?'selectedPage':'page'} onClick={()=>props.onPageChanged(p)} key={p}>{' '+p+' '}</span>)})}
                    
                </div>

                {props.users.map(u => { return (
            <div key={u.id}>
                <div>
                    <div>
                        <NavLink to= {'/profile/'+u.id}>
                        <img src={u.photos.small ? u.photos.small: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                        </NavLink>
                    </div>
                    <div>
                       {u.followed? <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={()=>{ props.toggleFollowingProgress(true,u.id);
                        userApi.delete(u.id).
                        then(responce =>{if (responce.resultCode==0) {props.unfollowed(u.id); }props.toggleFollowingProgress(false,u.id)});}                          
                           }>Unfollow</button>
                       : <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={()=>{props.toggleFollowingProgress(true,u.id)
                        userApi.post(u.id).
                        then(responce =>{if (responce.resultCode==0) {props.followed(u.id)}props.toggleFollowingProgress(false,u.id)});}}>Follow</button>}
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
            </div> )}) }
            </div>
        );
    }
    
    export default UserPresentation;