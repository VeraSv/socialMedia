import React, { Fragment } from 'react';
import './Profile.css';

class ProfileStatus extends React.PureComponent {
   
    state={
        editMode:false,
       status:this.props.status
    }
    onStatusChange=(e)=>{
       this.setState({status:e.currentTarget.value})
    }
    activateEditMode = ()=>{
       this.setState({editMode:true})
    }
    deactivateEditMode = ()=>{
        this.setState({editMode:false});
        this.props.updateStatus(this.props.status)
     }

    render(){
        return(<Fragment>
      
        {!this.state.editMode &&
        <div>
            <span className='status' onDoubleClick={this.activateEditMode}>{this.state.status||'Hi!'}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input className='status' onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.state.status||'Hi!'}></input>
        </div>
        }
            </Fragment>)
    }
}
export default ProfileStatus