import { useState } from 'react';
import './App.css'

function App() {

  const [count , setCount] = useState<number>(0);
  const [history , setHistory] = useState<number[]>([]);

  const updateHistory = (val : number) => {
    if(history.length === 0){
      setHistory([val])
    } else {
      setHistory(prev => [...prev , prev[prev.length - 1] + val])
    } 
  }
  const updateCount = (val : number) => {
    if(count === 0 && val === -1) return;
    setCount(prev => prev + val);
    updateHistory(val)
  }

  const addThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    updateHistory(3)
  };

  const reset = () =>{
    setCount(0)
    setHistory([])
  }
  return <>
    <h1 style={{textAlign:"center"}}>{count}</h1>
    <div style={{
      display:"flex",
      justifyContent: "center",
      alignItems : "center",
      gap : "10px",
    }}>
      <button onClick={() => updateCount(1)}>Add +1</button>
      <button onClick={addThree}>Add +3</button>
      <button onClick={() => updateCount(-1)}>Add -1</button>
      <button onClick={reset}>Reset</button>
    </div>

    <div style={{
      border: "1px solid black",
      textAlign:"center",
    }}>
      <h3>History</h3>
      <div>
        <ul>
          {history.map((el , index) => <li key={index}>{el}</li>)}
        </ul>
      </div>
    </div>
  </>
}

export default App
