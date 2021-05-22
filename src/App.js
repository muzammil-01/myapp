import React, { useState } from 'react'
import Message from './message'
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? ' dayLight':''}`}>
      <h1>good{isMorning ? ' Morning':' night'}</h1>
    <Message Counter={count}/>
    <br/>
    <button onClick={()=>setCount(count + 1)}>click here</button>
    <button onClick={()=>setMorning(!isMorning)}>update day</button>
    </div>
  );
}

export default App;
