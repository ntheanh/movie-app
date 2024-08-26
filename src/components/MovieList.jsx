import React, { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Modal from "react-modal"
import YouTube from "react-youtube"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
}
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1
  }
}

const MovieList = ({ title, data }) => {
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
    <div className="py-5 px-10">
      <div className="p-4 mb-4">
        <h2 className="uppercase font-semibold text-2xl">{title}</h2>
      </div>
      <Carousel
        className="flex items-center justify-start flex-wrap gap-5"
        responsive={responsive}
      >
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group "
              onClick={() => handleVideo(item.id)}
            >
              <div className="cursor-pointer group-hover:scale-105 transition-transform duration-300 ease-in-out h-full w-full">
                <div className="absolute top-0 left-0 bg-black/50 h-full w-full rounded-md " />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt=""
                  className="w-full h-full object-cover rounded-md "
                />
                <div className="absolute bottom-5 left-2">
                  <p className="text-white uppercase font-semibold">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>

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
    </div>
  )
}

export default MovieList
