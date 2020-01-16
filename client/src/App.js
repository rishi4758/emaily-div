
import React ,{Component} from "react"
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header.js'
import landing from './components/landing.js'
import {connect} from 'react-redux';
import * as actions from './actions'
     const Dashboard=()=><h1>dashboard</h1>
     const SurveyNew= ()=><h1> SurveyNew</h1>
     
class App extends Component{
     componentDidMount(){
this.props.fetchUser();
     }
     render(){
    return(  
    <div className="container">
         <BrowserRouter>
   <div>
        <Header/>
        <Route  exact  path ="/" component ={landing}></Route>
        <Route exact path="/surveys" component={Dashboard}></Route>
        <Route exact path="/surveys/new" component={SurveyNew}></Route>
</div>      
         </BrowserRouter>

    </div>  
    ) }  
    }
    export default  connect (null,actions)(App);