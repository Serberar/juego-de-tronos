import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Components/Rutas';
import Enlaces from './Components/Enlaces';

function App() {
  return (
    <div>
    <Router>
    <Rutas/>
    <Enlaces/>
    </Router>
    </div>
  );
}

export default App;