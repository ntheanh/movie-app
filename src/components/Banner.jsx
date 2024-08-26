import React from "react"
import IconRating from "../assets/rating.png"
import IconRatingHalf from "../assets/rating-half.png"
import ImgTemp from "../assets/temp-1.jpeg"
import IconPlay from "../assets/play-button.png"
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute top-0 left-0 bg-black opacity-40 w-full h-full" />
      <div className="flex justify-center space-x-[30px] items-center w-full h-full p-10 relative z-20">
        <div className="w-[50%]">
          <button className="p-2 text-xl text-white bg-gradient-to-r from-red-600 to-red-300 mb-5">
            TV Show
          </button>
          <div className="flex flex-col space-y-4">
            <p className="text-3xl text-white ">Nghe nói em thích tôi</p>
            <div className="flex space-x-3 items-center">
              <img src={IconRating} alt="" className="w-8 h-8 " />
              <img src={IconRating} alt="" className="w-8 h-8 " />
              <img src={IconRating} alt="" className="w-8 h-8 " />
              <img src={IconRating} alt="" className="w-8 h-8 " />
              <img src={IconRatingHalf} alt="" className="w-8 h-8 " />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore cum itaque corporis a repellat blanditiis velit ipsa
              eaque nam ipsum fugit, ab voluptatum minima iste quo architecto
              aliquid perspiciatis est facere odit earum magni! Eum eaque ipsa
              itaque necessitatibus fugiat.
            </p>
            <div className="flex items-center space-x-5">
              <button className="p-2 bg-black font-bold text-white text-sm outline-none border-none">
                Chi tiết
              </button>
              <button className="p-2 bg-red-500 font-bold text-white text-sm outline-none border-none">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[500px] relative cursor-pointer group">
            <img src={ImgTemp} alt="" className="w-full h-full object-cover" />
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img src={IconPlay} alt="" className="w-20 h-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
