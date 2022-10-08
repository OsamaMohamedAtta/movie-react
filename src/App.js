import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from './pages/homePage/Home'
import Movie from './pages/moviePage/Movie'
import People from './pages/peoplePage/People'
import Tv from './pages/tvPage/Tv'
import Search from './pages/searchPage/Search'
import Profile from './pages/profilePage/Profile'
import Details from './pages/detailsPage/Details';
import Login from './pages/loginPage/Login'
import Register from './pages/registerPage/Register'
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie' element={<Movie />}/>
        <Route path='/people' element={<People />}/>
        <Route path='/tv' element={<Tv />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/details/:id/:type' element={<Details />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
