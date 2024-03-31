import React from 'react';
import { useSelector } from 'react-redux';

const GrandSonBox = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      this is grandsonbox <strong>{count}</strong>
    </div>
  );
};

export default GrandSonBox;
