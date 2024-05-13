import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusTerminal from './routes/BusTerminal';
import ControlSystem from './routes/ControlSystem';
import { createGlobalStyle } from 'styled-components';
import SelectMode from './routes/SelectMode';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<SelectMode/>}/>
        <Route path='/control' element={<ControlSystem/>}/>
        <Route path='/busterminal' element={<BusTerminal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
