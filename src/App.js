import logo from './logo.svg';
import Until from './components/Until/Until'
import Secura from './components/Secura/Secura'
import Work from './components/Work/Work';
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
        <Route path='/work' element={<Work></Work>}></Route>
        <Route path='/Secura' element={<Secura></Secura>}></Route>
        <Route path='/Until' element={<Until></Until>}></Route>

      </Routes>

    </div>
  );
}

export default App;
