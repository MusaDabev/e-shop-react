import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greet';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Greeting>
       <h1>How are you?</h1>
     </Greeting>
     <Header />
    </div>
  );
}

export default App;
