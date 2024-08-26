import React, { useContext, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { MovieContext } from "../context/MovieProvider"

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

const MovieList = ({ title, data }) => {
  const { handleVideo } = useContext(MovieContext)
  return (
    <div className="py-5 px-10">
      <div className="p-4 mb-4">
        <h2 className="uppercase font-semibold text-2xl">{title}</h2>
      </div>
      <Carousel
        className="flex items-center justify-start flex-wrap gap-5"
        responsive={responsive}
      >
        {data &&
          data.length > 0 &&
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
    </div>
  )
}

export default MovieList
