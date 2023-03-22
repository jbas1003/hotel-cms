import { serverRoutes } from "./constants";

export function GetRooms () {
    var myHeaders = new Headers();

    myHeaders.append("Content-type", "application-json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    return fetch(serverRoutes.rooms, requestOptions);
}

export function AddRoom (roomNumber, roomTypeId) {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "room_no": roomNumber,
        "room_type_id": roomTypeId
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(serverRoutes.rooms, requestOptions);
}

export function UpdateRoom (roomId, roomNumber, roomTypeId) {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        // "room_id": roomId,
        "room_no": roomNumber,
        "room_type_id": roomTypeId
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(serverRoutes.updateRoom + roomId, requestOptions);
}

export function DeleteRoom (roomId) {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //     "room_id": roomId
    // });

    var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        // body: raw,
        redirect: "follow"
    };

    return fetch(serverRoutes.deleteRoom + roomId, requestOptions);
}