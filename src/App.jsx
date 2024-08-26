import "./App.css"
import Header from "./components/Header"
import Banner from "./components/Banner"
import MovieList from "./components/MovieList"
import { useEffect, useState } from "react"

function App() {
  const [movie, setMovie] = useState([])
  const [movie2, setMovie2] = useState([])

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

      console.log(data1.results)
      console.log(data2.results)
    }
    fetchMovie()
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <MovieList title="Top 10 phim hay nhất" data={movie} />
      <MovieList title="Phim hot" data={movie2} />
    </>
  )
}

export default App
