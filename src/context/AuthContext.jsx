import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../Utils/api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [employee, updateEmployee] = useState();
    const [errors, setErrors] = useState([]);
    const [LoginResult, setLoginResult] = useState();
    const navigate = useNavigate();
    var id;

    async function login (username, password) {
            
            try {
                const {data:loginResult} = await axios.post('/api/employees/login', {username, password});

                setLoginResult(loginResult);
                // token = loginResult.token;
                
                const {data:getEmployeeResult} = await axios.get('/api/employees/'+ loginResult.employee, {
                    headers: { 'Authorization': `Bearer ${loginResult.token}` }
                });

                updateEmployee(getEmployeeResult);
                // console.log(getEmployeeResult);
                const employeeData = {
                    "first_name": getEmployeeResult.first_name,
                    "last_name": getEmployeeResult.last_name,
                    "email": getEmployeeResult.email,
                    "token": loginResult.token
                };
                window.sessionStorage.setItem("employeeData", JSON.stringify(employeeData))
                updateEmployee(JSON.parse(window.sessionStorage.getItem("employeeData")));
                navigate('/admin/dashboard');
                id = loginResult.token
            } catch (e) {
                console.log(e);
            } 
    }

    const logout = async () => {

        let token = employee.token;
        let eoString = token.indexOf('|', 0);
        let token_id = token.slice(0, eoString);
        
        try {
            await axios.post('/api/employees/logout', {employee: id ,token_id: token_id});
            
            window.sessionStorage.clear();
            updateEmployee();
            setLoginResult();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        updateEmployee(JSON.parse(window.sessionStorage.getItem("employeeData")));
    },[])


    return <AuthContext.Provider value={{ employee, errors, login, LoginResult, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}