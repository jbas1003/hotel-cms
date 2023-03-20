import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Login, GetEmployee, Logout } from '../Utils/EmployeeMethods';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [employee, updateEmployee] = useState();
    const [errors, setErrors] = useState([]);
    const [LoginResult, setLoginResult] = useState();

    function login (username, password) {

            Login(username, password)
            .then(response => {return response.text()})
            .then(result => {
                let loginResult = JSON.parse(result);
                
                if (loginResult.status === true) {
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

                } else {
                    setErrors(loginResult);
                }
            })
            .catch(error => {return error});
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


    return <AuthContext.Provider value={{ employee, login, LoginResult, logout, errors }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}