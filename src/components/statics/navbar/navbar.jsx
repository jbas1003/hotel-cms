import { React, useState} from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../context/AuthContext';
import mh from '../../../Utils/Images/brand/mh.png';

const NavBar = () => {
    const { employee, logout } = useAuthContext();
    const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
        <nav className="fixed flex justify-between top-0 z-50 w-full h-16 border-b bg-darkSeaGreen border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            {/* <div className="flex items-center justify-between mx-11"> */}
                <a href="https://flowbite.com/" className="flex items-center mx-2">
                    <img src={mh} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Marikina Hotel</span>
                </a>
                <div className="w-40">
                    <button type="button"
                        className="text-sm bg-gray-800 rounded-full md:mr-14 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        onClick={handleDropDown}
                    >
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user_photo" />
                    </button>

                    <div className={`items-center z-10 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 dark:divide-gray-600
                        ${isOpen ? "block" : "hidden"}
                    `}
                        id="user-dropdown"    
                    >
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">{employee?.first_name} {employee?.last_name}</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{employee?.email}</span>
                        </div>
                        
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a> */}
                                <Link to='..' onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                    {/* <Link to='..' onClick={logout} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</Link> */}
                    
                </div>
            {/* </div> */}
        </nav>
    </>
  )
}

export default NavBar;