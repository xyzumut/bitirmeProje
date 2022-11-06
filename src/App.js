import './App.css';
import { Routes, Route } from 'react-router-dom'
import KanbanPanosu from './pages/KanbanPanosu/KanbanPanosu';
import Header from './components/header/Header';
import AnaSayfa from './pages/AnaSayfa/Anasayfa';
import Login from './pages/Login/Login';
import { ThemeContextProvider, useTheme } from './context/ThemeContext';
import styled from 'styled-components';

const App = () => {

  return (
    <>
      <ThemeContextProvider>
        <Header></Header>
        <Routes>
          <Route  path='/' element={<AnaSayfa/>}></Route>
          <Route path='/kanban' element={<KanbanPanosu/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
