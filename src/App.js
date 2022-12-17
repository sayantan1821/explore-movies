import "./App.css";
import { useEffect, useState, React } from "react";
import DataService from "./services/dataServices";
import MovieList from "./components/MovieList/MovieList";
import MovieModal from "./components/Modal/MovieModal";
import NavSearch from "./components/NavSearch/NavSearch";
import Loading from "./components/Loading/Loading";

let api = new DataService();

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listTitle, setListTitle] = useState("Most Recent Movies");
  const [modalContent, setModalContent] = useState({});
  const [loading, setLoading] = useState(true);
  const handleOpen = (movie) => {
    setOpen(true);
    setModalContent(movie);
  };
  const handleClose = () => setOpen(false);
  const getMovieList = () => {
    api.getMovies().then((res) => {
      setMovieList(res.data.items);
      setLoading(false);
    });
  };
  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    api.getSearchResults(searchQuery).then((res) => {
      setMovieList(res.data.results);
      setLoading(false);
    });
    setListTitle('Search Result for "' + searchQuery + '"');
    setSearchQuery("");
    
  };
  const loadDefault = () => {
    setLoading(true);
    getMovieList();
    setSearchQuery("");
    setListTitle("Most Recent Movies");
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img
          className="header_logo"
          src="Screenshot 2022-12-16 000831.png"
          alt="logo"
          onClick={loadDefault}
        />
        <NavSearch
          handleSubmit={handleSubmit}
          handleQueryChange={handleQueryChange}
          searchQuery={searchQuery}
        />
      </div>
      <hr className="header_break"></hr>
      <div className="list_title">
        <h3>{listTitle}</h3>
      </div>
      {!loading && <MovieList movieList={movieList} handleOpen={handleOpen} />}
      <MovieModal
        open={open}
        handleClose={handleClose}
        modalContent={modalContent}
      />
      {loading && <Loading />}
      {(!loading && movieList.length < 1) && <div className='loading'><h1>No results found.</h1></div>}
    </div>
  );
};

export default App;

//https://image.tmdb.org/t/p/original/
