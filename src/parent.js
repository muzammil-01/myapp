import React from 'react'
import Child from './child'
import Child2 from './child2'

const Parent =(props)=>{
    return(
        <div>
        <Child name="muzammil"/>
        <Child2/>
        </div>
    )
}

export default Parent;