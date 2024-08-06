import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import MenuAndDrinks from './Pages/Menu&Drinks/MenuAndDrinks';
import NotFound from './Pages/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/menu-and-drinks' element={<MenuAndDrinks />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  )
}

export default App;
