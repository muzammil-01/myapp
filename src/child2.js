import React, { useReducer } from 'react'
import counterReducer from './CounterReducer'
const Child2 = ()=>{
    let [state, dispatch] = useReducer(counterReducer , 10)
    
return(
    <div>
        <h1>this is second child using reducer</h1>
        <h3>value of reducer state is {state}</h3>
<button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
<button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
    </div>
)
}
export default Child2;