import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusTerminal from './routes/BusTerminal';
import TerminalHome from './routes/TerminalHome';
import { createGlobalStyle } from 'styled-components';

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
        <Route path='/' element={<TerminalHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
