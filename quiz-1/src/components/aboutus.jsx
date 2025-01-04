
function AboutUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            About <span className="text-yellow-500">Us</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We are committed to helping learners achieve their full potential through innovative quizzes.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2011/2011456.png"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-4">
              At Quizzy, our mission is to make learning engaging and accessible. With quizzes that challenge your intellect, we ensure that learning becomes an enjoyable journey.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8">
              Our Vision
            </h3>
            <p className="text-gray-600 mt-4">
              To be the go-to platform for learners seeking to enhance their knowledge and skills in a fun and interactive way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
