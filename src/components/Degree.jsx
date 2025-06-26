import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import degree1 from '../assets/degree/degree1.jpg';
import degree2 from '../assets/degree/degree2.jpg';

const Degree = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const degrees = [
    {
      id: 1,
      title: "Degree 1",
      image: degree1
    },
    {
      id: 2,
      title: "Degree 2",
      image: degree2
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white p-10">
      <Link 
        to="//" 
        className="flex items-center gap-2 text-white hover:text-secondary transition-colors mb-8"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        <span>Return to Main Page</span>
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-center">My Degrees</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {degrees.map((degree) => (
          <motion.div
            key={degree.id}
            className="bg-tertiary p-2 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(degree.image)}
          >
            <img
              src={degree.image}
              alt={degree.title}
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold text-center">{degree.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Preview Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Degree;
