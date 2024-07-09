import React, { useState } from 'react';
import "./File.css";

const File = () => {
    const [num, setNum] = useState(0);

    const Increment = () => {
        setNum(num + 1);
    }
    const Decrement = () => {
        setNum(num - 1);
    }
    const Reset = () => {
        setNum(0);
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrement</button>
        
      
    </div>
  );
}

export default File;
