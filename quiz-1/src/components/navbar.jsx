import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="text-xl font-bold"><Link to="/" className="text-3xl font-bold text-yellow-500">
<h1 className="text-lg font-semibold text-gray-800">
       Quiz<span className="text-yellow-500">zy</span>
     </h1>
     </Link></div>
           <div className="flex overflow-x-auto space-x-4">
            <Link to="/" className="text-gray-700 hover:text-yellow-500 whitespace-nowrap">
              Home
            </Link>
            <Link to="/aboutus" className="text-gray-700 hover:text-yellow-500 whitespace-nowrap">
              About Us
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-yellow-500 whitespace-nowrap">
              Features
            </Link>
            <Link to="/howitworks" className="text-gray-700 hover:text-yellow-500 whitespace-nowrap">
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
     