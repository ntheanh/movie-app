import React, { useContext, useState } from "react"
import { MovieContext } from "../context/MovieProvider"

const MovieSearch = ({ title, data }) => {
  const { handleVideo } = useContext(MovieContext)
  return (
    <div className="py-5 px-10">
      <div className="p-4 mb-4">
        <h2 className="uppercase font-semibold text-2xl">{title}</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 ">
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
      </div>
    </div>
  )
}

export default MovieSearch
