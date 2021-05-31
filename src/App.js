import React, { useState } from 'react'
import Message from './message'
import Parent from './parent'
import './App.css';
import CounterContext from './CounterContext'

function App() {
  // let [count, setCount] = useState(1);
  // let [isMorning, setMorning] = useState(true);
  let countState = useState(1)
  // let [count, setCount] = useState(25)
  return (
    // <div className={`box ${isMorning ? ' dayLight':''}`}>
    //   <h1>good{isMorning ? ' Morning':' night'}</h1>
    // <Message Counter={count}/>
    // <br/>
    // <button onClick={()=>setCount(count + 1)}>click here</button>
    // <button onClick={()=>setMorning(!isMorning)}>update day</button>
    // </div>
<CounterContext.Provider value={countState}>
    <div>
      <Parent/>
    </div>
</CounterContext.Provider>

  );
}

export default App;
