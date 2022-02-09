
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';
import Placements from './pages/Placements';
import  Ebook from './pages/Ebook';
import  Competitions from './pages/Competitions';
import Tutorials from './pages/Tutorials';
import Roadmaps from './pages/Roadmaps';
import Newsfeed from './pages/Newsfeed';

function App() {
  return(
    <>
      <Router>
        <Menubar/>
        <Routes>
            <Route path='/' exact element={<Placements/>}/>
            <Route path='/competitions'  element={<Competitions/>}/>
            <Route path='/Ebook'  element={<Ebook/>}/>
            <Route path='/Tutorials'  element={<Tutorials/>}/>
            <Route path='/Roadmaps'  element={<Roadmaps/>}/>
            <Route path='/Newsfeed'  element={<Newsfeed/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
