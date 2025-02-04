import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './Components/Courses/Courses';
import Testimonials from './Components/Testimonials/Testimonials';
import { Footer } from './Components/Footer/Footer';
import { Placements } from './Components/Placements/Placements';
import { About } from './Components/AboutUs/About-us';
import { Home } from './Components/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about-us' element={<About></About>}></Route>
          <Route path='/placements' element={<Placements></Placements>}></Route>
          <Route path='/courses' element={<Courses></Courses>}></Route>
          <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
