import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import EditMeasurement from './components/EditMeasurement'
import Measurement from './components/Measurement'
import Measurements from './components/Measurements'
import BootstrapCarousel from './components/BootstrapCarousel'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to My Fit Journal!
      </header>
      <h3 className="intro">This is an app to record your body measurements. <br/> It is a helpful tool to track your health, understanding your body, and staying motivated to achieving your fitness goals. </h3>
      <BootstrapCarousel />
      <Router>
        <Routes>
        <Route path='/' element={<Measurements />}/>
        <Route path='/:id' element={<Measurement />}/>
        <Route path='/:id/edit' element={<EditMeasurement />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
