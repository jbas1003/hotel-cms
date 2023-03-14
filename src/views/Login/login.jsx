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
        <div className="flex items-center justify-center h-screen bg-whiteSmoke">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1>Login</h1>
                <hr />
                <form onSubmit={HandleLogin}>
                    <div className="mt-4">
                        <div className="mb-6">
                            <div className='relative'>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="fo_username" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="fo_username" class="absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white light:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                            </div>
                            <p className="mt-2 text-sm text-green-600 light:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p>
                        </div>
                        <div className="mb-6">
                            <div className='relative'>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="fo_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none light:text-white light:border-gray-600 light:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="fo_password" class="absolute text-sm text-gray-500 light:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white light:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:light:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                            </div>
                            <p className="mt-2 text-sm text-green-600 light:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p>
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
