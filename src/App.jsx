import "./App.css"
import Header from "./components/Header"
import Banner from "./components/Banner"
import MovieList from "./components/MovieList"
import { useEffect, useState } from "react"
import MovieSearch from "./components/MovieSearch"

function App() {
  const [movie, setMovie] = useState([])
  const [movie2, setMovie2] = useState([])
  const [movieSearch, setMovieSearch] = useState([])

  const handleSearch = async (searchValue) => {
    setMovieSearch([])
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
      }
      const searchMovie = await fetch(url, options)
      const data = await searchMovie.json()
      setMovieSearch(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
      }
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1"

      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1"

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ])
      const data1 = await res1.json()
      const data2 = await res2.json()

      setMovie(data1.results)
      setMovie2(data2.results)

      // console.log(data1.results)
      // console.log(data2.results)
    }
    fetchMovie()
  }, [])

  return (
    <>
      <Header onSearch={handleSearch} />
      <Banner />
      {movieSearch.length > 0 ? (
        <MovieSearch title={"Ket qua tim kiem"} data={movieSearch} />
      ) : (
        <>
          <MovieList title="Top 10 phim hay nhất" data={movie} />
          <MovieList title="Phim hot" data={movie2} />
        </>
      )}
    </>
  )
}

export default App
