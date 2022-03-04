import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Navbarr from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
        <Navbarr />
    </div>
  );
}

export default App;
