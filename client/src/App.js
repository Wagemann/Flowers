import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import UpdateForm from './UpdateForm';
import Nav from './Nav';
import { useGetDataQuery } from './store/dataApi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
