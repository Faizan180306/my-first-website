import React from 'react';

const BookCard = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">₹ {price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
