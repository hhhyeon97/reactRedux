import './App.css';
//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  // let id = useSelector((state) => state.id);
  // let pw = useSelector((state) => state.pw);
  const dispatch = useDispatch();
  // type 속성은 필수 / payload는 함수의 매개변수 같은 느낌, 선택적인 요소임
  const increase = () => {
    dispatch({ type: 'INCREMENT' });
    // setCount(count + 1);
  };
  const decrease = () => {
    dispatch({ type: 'DECREMENT' });
  };
  // const login = () => {
  //   dispatch({ type: 'LOGIN', payload: { id: 'gamza', pw: '1234' } });
  // };
  const increase10 = () => {
    dispatch({ type: 'INCREMENT10' });
  };
  const decrease10 = () => {
    dispatch({ type: 'DECREMENT10' });
  };
  return (
    <div className="container">
      <div className="wrap">
        <h1>{count}</h1>

        <button onClick={increase}>▲</button>
        <button onClick={decrease}>▼</button>
        <button onClick={increase10}>10 up!</button>
        <button onClick={decrease10}>10 down!</button>
        {/* <button onClick={login}>LOGIN</button> */}
        {/* <Box /> */}
      </div>
    </div>
  );
}

export default App;
