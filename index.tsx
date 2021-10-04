import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  const [date, setDate] = useState<any>('');
  const changeit = ()=> {
    setDate(new Date().toLocaleDateString())
  }
  return (
    <div>
      <Hello name='' />
      <input type="text" placeholder= "display  current date" value={date} />
      <button onClick={changeit}>click to display date</button>
    </div>
  )
}

render(<App />, document.getElementById('root'));
