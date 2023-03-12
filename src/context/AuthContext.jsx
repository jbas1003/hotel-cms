import { createContext, useContext, useState } from 'react';
import axios from '../Utils/api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [employee, setEmployee] = useState();
    // const [token, setToken] = useState();
    const [errors, setErrors] = useState([]);
    const nagivate = useNavigate();

    // const csrf = () => axios.get("/sanctum/csrf-cookie");

    const login = async (username, password) => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            console.log(response)
            // try {
            //     axios.post('/api/employees/login', {username, password})
            //     .then(result => {
            //         var data = result.data;
    
            //         // setToken(data.token);
            //         setEmployee(data.employeeData);
            //         nagivate('/admin/dashboard');
            //     })
            // } catch (e) {
            //     if (e.response.status === 422) {
            //         setErrors(e.response.data.errors);
            //     }
            // } 
        })
    }

    return <AuthContext.Provider value={{ employee, errors, login }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}