import logo from './logo.svg';
import './App.css';
import Month from './components/Month';
import Dating from './components/Date';
import Day from './components/Day';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Month />
     {/* <Dating/>
     <Day/> */}
    </div>
  );
}

export default App;
