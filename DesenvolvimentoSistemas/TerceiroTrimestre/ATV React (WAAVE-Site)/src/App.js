import logo from './W.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="WAAVE">
          WAAVE
        </p>
        <a
          className="GitHub-link"
          href="https://github.com/1Verona/WAAVE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nosso GitHub 
        </a>
        <p> Nosso app foi criado para auxiliar o conusmo de mídia utilizando comandos via gestos  </p>
      </header>
    </div>
  );
}

export default App;
