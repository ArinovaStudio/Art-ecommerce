import Navbar from './components/Navbar';
import FeaturedPaintingsSection from './pages/FeaturedPaintingsSection';
import Home from './pages/Home';
import PopularCategoriesPage from './pages/PopularCategoriesPage';
import TopRatedPage from './pages/TopRatedPage';

function App() {
  return (
    <>
      <Home />
      <TopRatedPage />
      <PopularCategoriesPage />
      <FeaturedPaintingsSection />
    </>
  );
}

export default App;
