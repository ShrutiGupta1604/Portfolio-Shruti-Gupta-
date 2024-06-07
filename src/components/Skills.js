const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {/* Repeat this div for each skill */}
          <div className="bg-gray-200 rounded-full px-6 py-3 m-2 text-lg">
            JavaScript
          </div>
          {/* Repeat end */}
        </div>
      </div>
    </section>
  );
};
export default Skills;
