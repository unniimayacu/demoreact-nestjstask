import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ROUTES} from "./routes"
import Carcreate from './pages/cars/Carcreate';

function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
  <Routes>
     <Route path={ROUTES.DASHBOARD}  element={<Carcreate/>}/>
     
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
