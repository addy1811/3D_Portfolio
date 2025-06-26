import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";

import video1 from '../assets/video/video1.mp4';


const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Video 1",
      video: video1,
      description: "Introduction"
    },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-primary text-white p-10">
      

      <h1 className="text-4xl font-bold mb-8 text-center">Mock Interview</h1>

      <div className="max-w-4xl mx-auto relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-full z-10 hover:bg-opacity-75 transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-full z-10 hover:bg-opacity-75 transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>

        {/* Video Container */}
        <motion.div
          key={currentVideoIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary p-4 rounded-lg"
        >
          <div className="aspect-w-16 aspect-h-9">
            <video
              src={videos[currentVideoIndex].video}
              title={videos[currentVideoIndex].title}
              controls
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-center">{videos[currentVideoIndex].title}</h3>
            <p className="text-center mt-2 text-gray-300">{videos[currentVideoIndex].description}</p>
          </div>
        </motion.div>

        {/* Video Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentVideoIndex ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Videos, "videos");