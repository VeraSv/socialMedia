import React, { Fragment } from 'react';
import './Profile.css';

class ProfileStatus extends React.PureComponent {
    state={
        editMode:false
    }

    activateEditMode = ()=>{
       this.setState({editMode:true})
    }
    deactivateEditMode = ()=>{
        this.setState({editMode:false})
     }

    render(){
        return(<Fragment>
      
        {!this.state.editMode &&
        <div>
            <span className='status' onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input className='status' autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.props.status}></input>
        </div>
        }
            </Fragment>)
    }
}
export default ProfileStatus