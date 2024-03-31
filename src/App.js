import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: 'INCREMENT' });
    // setCount(count + 1);
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
