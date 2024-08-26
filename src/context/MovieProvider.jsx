import { createContext, useState } from "react"
import YouTube from "react-youtube"
import Modal from "react-modal"

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1
  }
}
const MovieContext = createContext()

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [videoKey, setVideoKey] = useState("")

  const handleVideo = async (id) => {
    setVideoKey("")
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
      }
      const movieKey = await fetch(url, options)
      const data = await movieKey.json()
      setVideoKey(data.results[0].key)
      setModalIsOpen(true)
      console.log(data)
    } catch (error) {
      setModalIsOpen(false)
      console.log(error)
    }
  }

  return (
    <MovieContext.Provider value={{ handleVideo }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999
          },
          content: {
            top: "50%",
            left: "50%",
            bottom: "auto",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
          }
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={videoKey} opts={opts} />
      </Modal>
    </MovieContext.Provider>
  )
}
export { MovieContext , MovieProvider}
