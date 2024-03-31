import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

// 부모 컴포넌트에서 props로 넘겨받을 필요 없이
// 자식이 직접 필요한 값을 가져다 쓸 수 있게 됨

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      this is box <strong>{count}</strong>
      <GrandSonBox />
    </div>
  );
};

export default Box;
