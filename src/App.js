import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <div className="wrap">
        <h2>{count}</h2>
        <button onClick={increase}>증가!</button>
      </div>
    </div>
  );
}

export default App;
