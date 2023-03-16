import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../Utils/api/axios';
import { useNavigate } from 'react-router-dom';
import { Login, GetEmployee, Logout } from '../Utils/methods';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [employee, updateEmployee] = useState();
    const [errors, setErrors] = useState([]);
    const [LoginResult, setLoginResult] = useState();
    const navigate = useNavigate();
    var id = {};

    function login (username, password) {

            Login(username, password)
            .then(response => {return response.text()})
            .then(result => {
                let loginResult = JSON.parse(result);
                setLoginResult(loginResult);

                GetEmployee(loginResult.employee, loginResult.token)
                .then(response => {return response.text()})
                .then(result => {
                    let getEmployeeResult = JSON.parse(result);
                    
                    const employeeData = {
                        "__": getEmployeeResult.id,
                        "first_name": getEmployeeResult.first_name,
                        "last_name": getEmployeeResult.last_name,
                        "email": getEmployeeResult.email,
                        "token": loginResult.token
                    };

                    window.sessionStorage.setItem("employeeData", JSON.stringify(employeeData));
                    updateEmployee(JSON.parse(window.sessionStorage.getItem("employeeData")));
                })
                .catch(error => {console.log(error)});
            })
            .catch(error => {console.log(error)});
    }

    function logout(){
        Logout(employee.__, employee.token)
        .then(result => {
            window.sessionStorage.clear();
            updateEmployee();
            setLoginResult();

            return result
        })
        .catch(error => {
            return error;
        })
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