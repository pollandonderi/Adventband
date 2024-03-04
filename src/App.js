
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import page1 from './pages/Page1';
import page2 from './pages/Page2';
import page3 from './pages/Page3';

function App() {
  console.log(window.location)
  return (
    <div>
      <Navbar/>

      <div>
        <Routes>
          <Route path='/' element='Home'></Route>
          <Route path='/Page1' element='Page1'></Route>
          <Route path='/Page2' element='Page2'></Route>
          <Route path='/Page3' element='Page3'></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
