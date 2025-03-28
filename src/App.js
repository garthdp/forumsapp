import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Reports from './Pages/Reports';
import Updates from './Pages/Updates';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </div>
  );
}

export default App;
