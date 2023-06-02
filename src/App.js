import logo from './logo.svg';
import './App.css';
import Home from './features/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Home />
      </div>
    </div>
  );
}

export default App;
