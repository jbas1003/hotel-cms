import { serverRoutes } from "./constants";

export function GetRoomTypes () {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    return fetch(serverRoutes.roomtypes, requestOptions);
}

export function AddRoomTypes (roomTypeId, roomName, roomDescription, roomSize, roomPrice, roomCapacity, token) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-type", "application/json");

    var raw = JSON.stringify({
        "room_type_id": roomTypeId,
        "name": roomName,
        "description": roomDescription,
        "size": roomSize,
        "price_per_night": roomPrice,
        "capacity": roomCapacity
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(serverRoutes.roomtypes, requestOptions);
}

export function UpdateRoomTypes (roomTypeId, roomName, roomDescription, roomSize, roomPrice, roomCapacity, token) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-type", "application/json");

    var raw = JSON.stringify({
        "name": roomName,
        "description": roomDescription,
        "size": roomSize,
        "price_per_night": roomPrice,
        "capacity": roomCapacity
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(serverRoutes.UDRoomTypes + roomTypeId, requestOptions);
}

export function DeleteRoomType (roomTypeId, token) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
    }

    return fetch(serverRoutes.UDRoomTypes + roomTypeId, requestOptions);
}