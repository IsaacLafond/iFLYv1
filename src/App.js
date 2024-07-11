import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ReviewsPage from './pages/ReviewsPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
        <Route path='/iFLYv1/destinations' element={ <DestinationsPage /> } />
        <Route path='/iFLYv1/reviews' element={ <ReviewsPage /> } />
        <Route path='/iFLYv1/book' element={ <BookingPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
