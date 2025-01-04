import { Link } from "react-router";
import landinImage from "./landingImage.png";
import line from "./line.png";

function App() {
  return (
    <>
      <div className="landing flex flex-col md:flex-row justify-around items-center p-4">
        <div className="landing-left flex flex-col justify-center items-center md:items-start gap-8 text-left">
          <div className="text-area mt-2 text-center md:text-left">
            <p className="font-sans font-bold text-4xl md:text-6xl">Learn</p>
            <p className="font-sans font-bold text-4xl md:text-6xl">New concept</p>
            <p className="font-sans font-bold text-4xl md:text-6xl">for each question</p>
          </div>
          <div className="flex flex-row gap-3 text-center md:text-left">
            <div className="inline-block h-[20px] min-h-[1em] w-0.5 self-stretch bg-black dark:bg-white/10"></div>
            <p className="font-sans text-gray-500">
              We help you prepare for exams and quizzes
            </p>
          </div>
          <div className="btn flex flex-col md:flex-row items-center gap-4 md:gap-14">
            <Link to="/quizzing">
              <button
                type="button"
                className="text-white m-2 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Start Quizzing
              </button>
            </Link>
            <Link to="/howitworks" className="font-sans text-yellow-400 text-center">
              <button>Know more</button>
            </Link>
          </div>
        </div>
        <div className="landing-right justify-center items-center mt-8 md:mt-0">
          <img src={landinImage} className="w-full md:w-auto md:m-14" alt="landingImage" />
        </div>
      </div>

      <img src={line} className="w-full sm:w-96 " alt="lineimage" />
      <hr className="m-auto bg-red-800 w-[97%] mt-8 mb-8" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why <span className="text-yellow-500">Choose Us?</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Empowering learners with tailored quizzes to achieve success.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="Personalized"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Personalized Quizzes
            </h3>
            <p className="text-gray-600 mt-2">
              Tailored quizzes to match your learning goals.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2942/2942656.png"
                alt="Analytics"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Real-Time Analytics
            </h3>
            <p className="text-gray -600 mt-2">
              Track your progress with detailed analytics.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2965/2965276.png"
                alt="Expert Content"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Expert Content
            </h3>
            <p className="text-gray-600 mt-2">
              Learn from questions curated by industry experts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App; 