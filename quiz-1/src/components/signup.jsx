
const Signup = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">QuizGrad</h1>
          <p className="text-center text-gray-600 mb-6">Login to your account</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Enter your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
               Create your Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
               Confirm your Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg font-medium"
            >
            register
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            already have an account?{" "}
            <a href="/login" className="text-yellow-500 hover:underline">
             login
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Signup;