import logo from './logo.svg';
import Contact from './components/Contact/Contact';
import Canada from './components/Canada/Canada';
import Shoushan from './components/Shoushan/Shoushan';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main_page from './components/Main_page/Main_page';
import './App.css';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/herry" replace />} />
        <Route path="/herry" element={<Main_page />} />
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/shoushan' element={<Shoushan></Shoushan>}></Route>
        <Route path='/canada' element={<Canada></Canada>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  );
}

export default App;
