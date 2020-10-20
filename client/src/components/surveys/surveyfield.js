import React from "react"

export default ({input,label,meta:{error,touched}})=>{

    return(
<div>
    <label>{label}</label>
    <input {...input}style={{marginBottom:'5px'}}/> 
    <div style={{marginBottom:"5px",marginTop:'0px', color:"red", fontSize:'12px'}}>{touched && error} </div>
     
    </div>
    )
}