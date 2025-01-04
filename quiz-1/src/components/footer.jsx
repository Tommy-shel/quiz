
function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      
          <div className="text-gray-600 flex  flex-col justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-lg font-semibold text-gray-800">
              Quiz<span className="text-yellow-500">zy</span>
            </h1>
            <p>We help you prepare for exams and quizzes.</p>
          </div>
      

     
        <div className="my-6 border-t border-gray-300"></div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Quizzy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/tushar-thakur-b366b031a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-500 hover:text-blue-500 transition"
              target="_blank"
              rel="noreferrer"
            >
         Linkedin
            </a>
            <a
              href="https://x.com/TechNPlay_01?t=Asiz1i5XHAt6VBnymPdlLw&s=09"
              className="text-gray-500 hover:text-blue-400 transition"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/tusharthakur_11/profilecard/?igsh=eThwMHMzc2R1ZW03"
              className="text-gray-500 hover:text-pink-400 transition"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
