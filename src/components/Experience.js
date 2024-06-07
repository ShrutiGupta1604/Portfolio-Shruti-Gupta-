const Experiences = () => {
    return (
      <section id="experiences" className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat this div for each project */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Title</h3>
              <p className="text-gray-700 mb-4">
                Brief description of the Experiences.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View  Experiences
              </a>
            </div>
            {/* Repeat end */}
          </div>
        </div>
      </section>
    );
  };
  export default Experiences;
  