
import './App.css';
import Navbar from './components/navbar/Navbar'  
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './BRoutes';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes/>
    </div>
    </Router>
  );
}

export default App;
