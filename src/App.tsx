import { Routes, Route } from 'react-router-dom';
import MovieBrowser from './MovieBrowser';
import FavMovies from './FavMovies';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<MovieBrowser />} />
            <Route path="/fav" element={<FavMovies />} />
         </Routes>
      </>
   );
};
 
export default App;