
import './App.css';
import './Header';
import Header from './Header';
import Main from './Main';
import Aside from './Aside';

function App() {
  return (
    <div className="App">
    <Header/>
      <div className="section">
      <Main/>
      <Aside/>
      </div>
    </div>
  );
}

export default App;
