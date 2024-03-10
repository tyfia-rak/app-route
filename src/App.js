import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/home/HomePage';
import BlogPage from './page/blog/BlogPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/blogpage' element={<BlogPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
