import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCovid from './components/AddCovid';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCovid/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
