import React from "react";
 import './FormControls.css';
 const FormControl =({input, meta, child, ...props})=>{
    const hasError=meta.error && meta.touched;
    return (
        <div className='error'>
            <div>
            {props.children}
            </div>
           {hasError && <span className='error'>{meta.error}</span> } 

        </div>
    )
 }

export const Textarea =(props) =>{
    const {input, meta, child, ...restProps}=props;
    return (
        <FormControl  {...props}><textarea {...input} {...restProps}></textarea></FormControl> 
    )
}

export const Input=(props) =>{
    const {input, meta, child, ...restProps}=props;
    return (
        <FormControl  {...props}><input {...input} {...restProps}></input></FormControl> 
    )
}