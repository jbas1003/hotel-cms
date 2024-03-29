import { React, useState } from 'react'
import { Navigate } from 'react-router-dom';
import useAuthContext from '../../context/AuthContext';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { employee, login, errors } = useAuthContext();
    

    async function HandleLogin (myEvent) {
        myEvent.preventDefault();
        login(username, password);
    }

  return employee ? <Navigate to="/admin/dashboard" /> : (
    <>
        <div className="flex items-center justify-center h-screen bg-seaGreen">
            <div className="w-96 p-6 shadow-lg bg-whiteSmoke rounded-md">
                <div className='flex justify-center'>
                    <span className=' text-2xl font-bold text-darkSeaGreen'>Login</span>
                </div>
                <hr className=' mt-5'/>
                <form onSubmit={HandleLogin}>
                    <div className="mt-4">
                        <div className="mb-6">
                            <div className='relative'>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="fo_username" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-darkSeaGreen focus:outline-none focus:ring-0 focus:border-darkSeaGreen peer" placeholder=" " />
                                <label htmlFor="fo_username" className="absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whiteSmoke light:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkSeaGreen peer-focus:light:text-darkSeaGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                            </div>
                            {(errors.status === false) ? (<p className="mt-2 text-sm text-red-600 light:text-red-500"><span className="font-medium">Error!</span> {errors.message}</p>) : ""}
                        </div>
                        <div className="mb-6">
                            <div className='relative'>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="fo_password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-darkSeaGreen focus:outline-none focus:ring-0 focus:border-darkSeaGreen peer" placeholder=" " />
                                <label htmlFor="fo_password" className="absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whiteSmoke light:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkSeaGreen peer-focus:light:text-darkSeaGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                            </div>
                            {(errors.status === false) ? (<p className="mt-2 text-sm text-red-600 light:text-red-500"><span className="font-medium">Error!</span> {errors.message}</p>) : ""}
                        </div>
                        {/* <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-whiteSmoke">Remember me</label>
                        </div> */}
                        <button type="submit" className="text-white bg-darkSeaGreen hover:bg-darkGreen focus:ring-4 focus:outline-none focus:ring-seaGreen font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-darkSeaGreen dark:focus:ring-darkGreen">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
