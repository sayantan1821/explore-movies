import axios from "axios";
import { apiBaseURL } from "./constant";

export default class DataService {
  
  constructor() {
    this.client = null;
    this.apiKey = null;
    this.init();
  }
  init() {
    this.apiKey = `${process.env.REACT_APP_API_KEY}`
    this.client = axios.create({
      baseURL: apiBaseURL,
    });
  }
  getMovies() {
    return this.client.get(
      "/3/list/28?api_key="+this.apiKey+"&language=en-US&page=2"
    );
  }
  getSearchResults(query) {
    return this.client.get(
      "https://api.themoviedb.org/3/search/movie?api_key="+this.apiKey+"&language=en-US&page=1&include_adult=false&query=" +
        query
    );
  }
}
