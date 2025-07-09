import React from 'react';
import HeroSection from '../components/HeroSection';
import BookCard from '../components/BookCard';

const Home = () => {
  const books = [
    { title: 'MPSC Rajyaseva Guide', price: 450, image: '/images/book1.jpg' },
    { title: 'UPSC Prelims Booster', price: 650, image: '/images/book2.jpg' },
    { title: 'Banking Exam Practice', price: 350, image: '/images/book3.jpg' },
  ];

  return (
    <div>
      <HeroSection />
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
