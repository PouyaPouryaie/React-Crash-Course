import logo from './logo.svg';
import './App.css';

function App() {
  
  const handleNameChange = () => 
  {
    const names = ['pouya','ali', 'sina'];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
