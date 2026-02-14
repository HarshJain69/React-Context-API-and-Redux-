import './App.css';
import { Header } from './components/Header';
import { ContextDemo } from './pages/ContextDemo';
import { ReduxDemo } from './pages/ReduxDemo';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ContextDemo />
        <div className="divider" />
        <ReduxDemo />
      </main>
      <footer className="footer">
        <p>Experiment 4 — State Management with Context API & Redux Toolkit</p>
      </footer>
    </div>
  );
}

export default App;
