import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ReviewsPage from './pages/ReviewsPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='https://IsaacLafond.github.io/iFLYv1' element={ <HomePage /> } />
        <Route path='/destinations' element={ <DestinationsPage /> } />
        <Route path='/reviews' element={ <ReviewsPage /> } />
        <Route path='/book' element={ <BookingPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
