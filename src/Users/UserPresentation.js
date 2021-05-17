import React from 'react';
import './users.css';
import { NavLink } from 'react-router-dom';

let UserPresentation=(props)=> {

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
                       {u.followed? <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={()=>{ 
                           props.unfollowThunk(u.id)}                          
                           }>Unfollow</button>
                       : <button disabled={props.followingProgress.some(id=>id===u.id)}
                        onClick={()=>{props.followThunk(u.id)}}>Follow</button>}
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