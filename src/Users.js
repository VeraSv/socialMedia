import React from 'react';
import PropTypes from 'prop-types';
import './users.css'

class Users extends React.PureComponent {
    static propsTypes={
        users:PropTypes.array,
        followed:PropTypes.func,
        unfollowed:PropTypes.func,
        setUsersAc:PropTypes.func
        }
        
    render (){
        if(this.props.users.length==0) this.props.setUsers({users:[
            {id:1, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:true, fullName:"Dmitry", status:"Boss", location:{city:'Minsk', country:'Belarus'}},
            {id:2, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:false,fullName:"Sasha", status:"Boss", location:{city:'Brest', country:'Belarus'}}, 
            {id:3, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:true,fullName:"Sergej", status:"Boss", location:{city:'Vitebsk', country:'Belarus'}}]}
         )
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