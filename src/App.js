import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './features/home/Home';
import { COLOR_LIST } from './common/Constants';

function App() {
  
  const [mainColor, setMainColor] = useState(COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]);
  const bgColorStyle = { backgroundColor: mainColor }

  return (
    <div className="App" style={bgColorStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Home mainColor={mainColor} setMainColor={setMainColor} />
      </div>
    </div>
  );
}

export default App;
