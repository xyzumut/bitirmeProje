import './App.css';
import { Routes, Route } from 'react-router-dom'
import KanbanPanosu from './pages/KanbanPanosu/KanbanPanosu';
import Header from './components/Header/Header';
import AnaSayfa from './pages/AnaSayfa/Anasayfa';
import { ThemeContextProvider } from './context/ThemeContext';
import TicketPage from './pages/TicketPage/TicketPage';
import Login from './pages/Login/Login'

const App = () => {

  return (
    <>
      <ThemeContextProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<AnaSayfa/>}></Route>
          <Route path='/kanban' element={<KanbanPanosu/>}></Route>
          <Route path='/ticket/:id' element={<TicketPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;