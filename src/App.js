import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusTerminal from './routes/BusTerminal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/busterminal' element={<BusTerminal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
