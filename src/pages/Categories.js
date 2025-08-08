import React from "react";

const categories = [
  {
    id: 1,
    title: "MPSC Books",
    description: "Complete collection for Maharashtra Public Service Commission",
    count: "1,200+",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "UPSC Books",
    description: "Civil Services examination preparation materials",
    count: "2,500+",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Banking Exams",
    description: "SBI, IBPS, RBI and other banking exam books",
    count: "800+",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Railway Exams",
    description: "RRB NTPC, Group D, and other railway exam guides",
    count: "600+",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "SSC Exams",
    description: "Staff Selection Commission exam preparation",
    count: "900+",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
  },

{
  id: 6,
  title: "Police Bharti",
  description: "Police recruitment exam study materials",
  count: "400+",
  image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop",
},




];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          📚 Explore Book Categories
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Find the perfect study materials for your competitive exam preparation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-blue-400"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-t-2xl w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {category.count}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;


