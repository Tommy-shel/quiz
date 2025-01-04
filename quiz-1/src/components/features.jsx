
function Features() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Key <span className="text-yellow-500">Features</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Explore the features that make Quizzy your best learning companion.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Easy Interface"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Intuitive Interface
            </h3>
            <p className="text-gray-600 mt-2">
              Solve quizzes effortlessly with our user-friendly interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2645/2645865.png"
                alt="Progress Tracker"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Progress Tracker
            </h3>
            <p className="text-gray-600 mt-2">
              Analyze your strengths and weaknesses with detailed analytics.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3050/3050414.png"
                alt="Certification"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Certification
            </h3>
            <p className="text-gray-600 mt-2">
              Earn certificates to showcase your achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
