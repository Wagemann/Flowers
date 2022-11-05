import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import { useGetDataQuery } from './store/dataApi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<MainPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
