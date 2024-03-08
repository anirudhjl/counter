import './App.css';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  const incrementCounter = () => {
    setValue(value + 1);
  }
  const decrementCounter = () => {
    value !== 0 && setValue(value - 1);
  }

  const resetCount = () => {
    setValue(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={decrementCounter}>-</button>
        <p>Count - {value}</p>
        <button onClick={incrementCounter}>+</button>
        <br />
        <button onClick={resetCount} style={{ backgroundColor: 'black' }}>Reset</button>
      </header>
    </div>
  );
}

export default App;
