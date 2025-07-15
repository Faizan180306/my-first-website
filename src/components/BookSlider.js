// src/components/BookSlider.js
import React from "react";
import Slider from "react-slick";

const books = [
  {
    id: 1,
    title: "UPSC Strategy Guide",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "MPSC Smart Notes",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Banking Mastery",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e30e4d2d0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Railway Exam Prep",
    image: "https://images.unsplash.com/photo-1584697964154-0c4af57c7c71?auto=format&fit=crop&w=400&q=80",
  },
];



const BookSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">
          📚 Top Trending Books
        </h2>
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="px-3">
              <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-center text-lg font-semibold">{book.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BookSlider;
