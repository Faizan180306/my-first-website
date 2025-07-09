const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Welcome to <span className="text-yellow-400">Amar Book Centre</span>
                </h1>
                <p className="mb-8 text-lg">Your destination for Competitive Exam Books.</p>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
                    Shop Now
                </button>
            </div>
        </section>

    );
};

export default HeroSection;
