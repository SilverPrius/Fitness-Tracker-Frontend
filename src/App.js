import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import EditMeasurement from './components/EditMeasurement';
import Measurement from './components/Measurement'
import Measurements from './components/Measurements'
import Progress from './components/Progress';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Fit Journal
      </header>
      <Router>
        <Routes>
        <Route path='/' element={<Measurements />}/>
        <Route path='/:id' element={<Measurement />}/>
        <Route path='/:id/edit' element={<EditMeasurement />}/>
        <Route path='/progress' element={<Progress />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
