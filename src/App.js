import logo from './logo.svg';
import './App.css';
import './App.scss';
import Header from './components/Header';
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <MainContent/>
      </body>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
