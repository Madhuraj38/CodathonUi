
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';

import Login from './Login';
/*import Display from './Display';
<Routes>
<Route path='/' exact element={<Login/>}/>
            <Route path='/Menubar' exact element={<Menubar/>}/>
      </Routes>
*/
function App() {
  return(
    <>
      <Router>
      <Routes>
<Route path='/' exact element={<Login/>}/>
            <Route path='/Menubar' exact element={<Menubar/>}/>
      </Routes>
      
      </Router>
    </>
  );
}
export default App;

