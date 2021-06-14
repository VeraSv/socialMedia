import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Forms/FormsControl';
import {requiredField, maxLengthCreator } from '../Utils/validator';
import {connect} from 'react-redux';
import {login} from '../auth_reducer'
import { Redirect } from 'react-router';
import './login.css'
const maxLenght= maxLengthCreator(30);
let LoginForm=(props) =>{
    const {handleSubmit}=props
    return <div>
       
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name='email' validate={[requiredField, maxLenght]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name='password' validate={[requiredField, maxLenght]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name='remember' validate={[requiredField, maxLenght]}/> remember me
            </div>
           {props.error && <div className='form_error'>
                {props.error}
            </div>} 
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
    
}

LoginForm = reduxForm({
    form:'loginForm'
})(LoginForm)

const Login=(props)=>{
    const onSubmit =(formData)=>{
      props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to = {'/propfile'} />
    }
return <div>
 <h1>Login</h1>
 <LoginForm onSubmit={onSubmit} />
</div>
}
const mapStateToProps=(state)=>{
    return {isAuth:state.isAuth}
}
export default connect(mapStateToProps,{login})(Login);
