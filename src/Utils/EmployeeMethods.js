import { serverRoutes } from "./constants";

export function Login (username, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    var raw = JSON.stringify({
        "username": username,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(serverRoutes.employeeLogin, requestOptions)
}

export function Logout (id, token) {
    
    let eoString = token.indexOf('|', 0);
    let token_id = token.slice(0, eoString);

    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-type", "application/json");

    var raw = JSON.stringify({
        "employee": id,
        "token_id": token_id
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(serverRoutes.employeeLogout, requestOptions)

}

export const AddNewemployee = (employeeId, firstName, lastName, contactNumber, email, username, password, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "employee_id": employeeId,
        "first_name": firstName,
        "last_name": lastName,
        "username": username,
        "email": email,
        "contact_no": contactNumber,
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
    .then(result => {return result})
    .catch(error => {return error});
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
            return response.message
        }else{
            callback(newResult)
        }
    })
}

export function GetEmployee (id, token) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(serverRoutes.UDEmployee + id, requestOptions);
}

export const UpdateEmployee = (id, employeeId, firstName, lastName, contactNumber, email, username, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "employee_id": employeeId,
        "first_name": firstName,
        "last_name": lastName,
        "username": username,
        "email": email,
        "contact_no": contactNumber
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
    fetch(serverRoutes.UDEmployee + id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("Error", error));
}

export const DeleteEmployee = (id, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    return fetch(serverRoutes.UDEmployee + id, requestOptions)
}