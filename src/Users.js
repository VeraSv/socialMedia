import React from 'react';

class Users extends React.PureComponent {
    render (){
        return (
            <div>
                {props.users.map(u => {
                <div key={u.id}>
                    <div>
                        <div>
                            <img src=''/>
                        </div>
                        <div>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div>
                        <div>
                        <span>{u.fullName}</span>
                        <span>{u.status}</span>
                        </div>
                        <div>
                        <span>{u.city}</span>
                        <span>{u.country}</span>
                        </div>
                    </div>
                </div> })}
            </div>
        );
        }
    }
    export default Users;