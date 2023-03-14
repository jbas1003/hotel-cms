import { serverRoutes } from "./constants";
import axios from "./api/axios";
import { useNavigate } from 'react-router-dom';

export const AddNewemployee = (employeeId, firstName, lastName, contactNumber, email, username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "employee_id": employeeId,
        "firstName": firstName,
        "lastName": lastName,
        "username": username,
        "email": email,
        "contactNo": contactNumber,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    fetch(serverRoutes.employees, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const GetEmployees = (callback) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(serverRoutes.employees, requestOptions)
    .then(async response => {
        var newResult = await response.json()
        // console.log(response.status)
        if(response.status !== 200) {
            console.log('Error: ', response.message)
            // callback(response)
        }else{
            callback(newResult)
        }
    })
}

export const UpdateEmployee = (id, employeeId, firstName, lastName, contactNumber, email, username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "employee_id": employeeId,
        "firstName": firstName,
        "lastName": lastName,
        "username": username,
        "email": email,
        "contactNo": contactNumber,
        "password": password
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
    fetch('http://127.0.0.1:8000/api/employees/' + id + '/update', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const DeleteEmployee = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    fetch('http://127.0.0.1:8000/api/employees/' + id + '/delete', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

// export function HandleLogin (username, password) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         username: username,
//         password: password
//     });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     }

//     fetch(serverRoutes.employeeLogin, requestOptions)
//     .then(response => response.json())
//     .then(result => {return result})
//     .catch(error => console.log('error', error));
// }