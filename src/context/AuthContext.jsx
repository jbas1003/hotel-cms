import { createContext, useContext, useState } from 'react';
import axios from '../Utils/api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [employee, setEmployee] = useState();
    const [errors, setErrors] = useState([]);
    const [LoginResult, setLoginResult] = useState();
    const navigate = useNavigate();
    var token;

    async function login (username, password) {
            
            try {
                const {data:loginResult} = await axios.post('/api/employees/login', {username, password});

                setLoginResult(loginResult);
                token = loginResult.token;
                
                const {data:getEmployeeResult} = await axios.get('/api/employees/'+ loginResult.employee, {
                    headers: { 'Authorization': `Bearer ${loginResult.token}` }
                });

                setEmployee(getEmployeeResult);
                navigate('/admin/dashboard');
            } catch (e) {
                console.log(e);
            } 
    }

    const logout = async () => {

        let token = LoginResult.token;
        let eoString = token.indexOf('|', 0);
        let token_id = token.slice(0, eoString);
        
        try {
            await axios.post('/api/employees/logout', {employee: LoginResult.employee ,token_id: token_id});
            
            setEmployee();
            setLoginResult();
        } catch (error) {
            console.log(error);
        }
    }

    return <AuthContext.Provider value={{ employee, errors, login, LoginResult, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}