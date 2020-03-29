import axios from 'axios';
import {FETCH_USER} from './types'
 export  const fetchUser= ()=> async dispatch =>{
   const res=await axios.get('/api/user')
   dispatch({type:FETCH_USER,payload:res.data})
} 

export  const handletoken= (token)=> async dispatch =>{

  const res=await axios.post('/api/stripe',token)
  dispatch({type:FETCH_USER,payload:res.data})
} 

export const submitSurvey=(values)=>async dispatch=>{
  console.log(values)
const res=await axios.post('http://localhost:5004/api/surveys',values);

dispatch({type:FETCH_USER, payload:res.data});
}

