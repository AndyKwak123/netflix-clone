import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row
        title="Netflix Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchURL={requests.RomanecMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
