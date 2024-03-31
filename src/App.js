import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let pw = useSelector((state) => state.pw);
  const dispatch = useDispatch();
  // type 속성은 필수 / payload는 함수의 매개변수 같은 느낌, 선택적인 요소임
  const increase = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 5 } });
    // setCount(count + 1);
  };

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'gamza', pw: '1234' } });
  };

  return (
    <div className="container">
      <div className="wrap">
        <h2>{count}</h2>
        <span>
          id : {id} pw : {pw}
        </span>
        <button onClick={increase}>증가!</button>
        <button onClick={login}>LOGIN</button>
        <Box />
      </div>
    </div>
  );
}

export default App;
