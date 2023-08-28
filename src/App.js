import Moviecard from './component/MovieCard'
import {useEffect , useState} from "react"
import './App.css'
import SearchIcon from "./Search.svg"

const API_URL ='http://www.omdbapi.com?apiKey=8de95cf1';

const  movie1 ={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  return (
    <div className="App">
    <h1>MovieLand</h1>

<div className="search">
  <input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for movies"
  />
  <img
    src={SearchIcon}
    alt="search"
    onClick={() => searchMovies(searchTerm)}
  />
</div>

{movies?.length > 0 ? (
  <div className="container">
    {movies.map((movie) => (
      <Moviecard movie={movie}/>
    ))}
  </div>
) : (
  <div className="empty">
    <h2>No movies found</h2>
  </div>
)}
</div>  
    
  );
}

export default App;
