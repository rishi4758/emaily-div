import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../actions'
import {connect} from 'react-redux'
 class  Payments extends React.Component{

render(){

    return(
        <StripeCheckout 
        name="Emaiy"
        description="minimum $5"
        amount={500}
        token={token=>this.props.handletoken(token)}
        stripeKey={process.env.REACT_APP_STRIPEKEY}
         >
             <button className="btn"> Add Credits</button>
         </StripeCheckout>
    )
}


}
export default connect(null,actions)( Payments)