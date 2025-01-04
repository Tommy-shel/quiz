
function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            How <span className="text-yellow-500">It Works</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Follow these simple steps to start solving quizzes and mastering concepts.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <span className="text-2xl font-bold text-yellow-500">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Sign Up
            </h3>
            <p className="text-gray-600 mt-2">
              Create your account in just a few clicks to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <span className="text-2xl font-bold text-yellow-500">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Choose a Quiz
            </h3>
            <p className="text-gray-600 mt-2">
              Pick from a variety of topics that suit your learning goals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <span className="text-2xl font-bold text-yellow-500">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Learn and Improve
            </h3>
            <p className="text-gray-600 mt-2">
              Solve quizzes and get instant feedback to track progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
