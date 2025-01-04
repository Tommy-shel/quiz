import { Link } from "react-router"

const quizzing = () => {
  return (
    <div className=" flex flex-row justify-center  p-40">
        <div className="take-quiz h-{400px} w-80 border-spacing-2 gap-10 max-w-sm mx-auto bg-white rounded-xl shadow-md p-4">
            <img  className="h-60" src="https://imgs.search.brave.com/hzy7lJnLNpok_HYiwb7PJYRxG799TVq_JPaRvkQwfh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/MTA4NDI3Ny9waG90/by9xdWl6LXRpbWUt/Y29uY2VwdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Yzhx/ZU1raEhXYTZCMndG/NjRXU0NjQkFIdGpw/OWZYVnhhT01GWXZB/VXJvUT0" alt="take quiz" />
             <h1 className="text-xl font-bold">Take Quiz</h1>
            <p>Quizzes are a quick, effective, and enjoyable way to learn and improve!</p>
        <Link to="/takequiz"><button className="text-white m-2 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Start quiz</button></Link>
        </div>
        <div className="make-quiz h-{400px} w-80 border-spacing-2 max-w-sm mx-auto bg-white rounded-xl shadow-md p-4" >
<img className="h-60"  src="https://imgs.search.brave.com/jYn7oX7EIMY5pehqFxzbsVmTEi9qqZx6RtXA5Tb3_jc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTY0/OTQ3NTk0L3Bob3Rv/L3F1aXotd29yZC1v/bi1ub3RlcGFwZXIt/d2l0aC1oYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/ZmJXWl9fVURJajdp/TTRORWV6dHBtV2Za/aF9kUEhoM3lvODdZ/d0s5SlFFPQ" alt="make-quiz" />
<h1 className="text-xl font-bold">Make Quiz</h1>
<p>Its a hands-on way to learn, teach, and grow!</p>

<Link to="/makequiz"><button className="text-white m-2 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Make quiz</button></Link>
        </div>
    </div>
  )
}

export default quizzing