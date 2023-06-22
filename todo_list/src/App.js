import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import Write from './components/Write';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Filter/>
      <Write/>
      <List/>
    </div>
  );
}

export default App;
