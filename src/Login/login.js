import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Forms/FormsControl';
import {requiredField, maxLengthCreator } from '../Utils/validator';
const maxLenght= maxLengthCreator(10);
let LoginForm=(props) =>{
    const {handleSubmit}=props
    return <div>
       
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name='login' validate={[requiredField, maxLenght]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name='password' validate={[requiredField, maxLenght]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name='remember' validate={[requiredField, maxLenght]}/> remember me
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
    
}

LoginForm = reduxForm({
    form:'loginForm'
})(LoginForm)

const Login=()=>{
    const onSubmit =(formData)=>{
      console.log(formData)
    }
return <div>
 <h1>Login</h1>
 <LoginForm onSubmit={onSubmit} />
</div>
}
export default Login;
