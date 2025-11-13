import Navbar from './components/Navbar';
import FeaturedPaintingsSection from './pages/FeaturedPaintingsSection';
import Home from './pages/Home';
import PaintingDetail from './pages/PaintingDetail';
import PopularCategoriesPage from './pages/PopularCategoriesPage';
import RequestCustomPainting from './pages/RequestCustomPainting';
import TopRatedPage from './pages/TopRatedPage';

function App() {
  return (
    <>
      <PaintingDetail />
      <Home />
      <TopRatedPage />
      <PopularCategoriesPage />
      <FeaturedPaintingsSection />
      <RequestCustomPainting />
    </>
  );
}

export default App;
