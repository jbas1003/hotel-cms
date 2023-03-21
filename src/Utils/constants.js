export const myApiURL = 'http://127.0.0.1:8000/api';

export const serverRoutes = {
    // START: Employees Routes

    employees: myApiURL + '/employees',
    UDEmployee: myApiURL + '/employees/',
    employeeLogin: myApiURL + '/employees/login',
    employeeLogout: myApiURL + '/employees/logout',

    // END: Employees Routes

    //START: Room Types Routes

    roomtypes: myApiURL + '/room-types',
    UDRoomTypes: myApiURL + '/room-types/',

    //END: Room Types Routes

    // START: Rooms Routes

    rooms: myApiURL + '/rooms',
    updateRoom: myApiURL + '/rooms/update',
    deleteRoom: myApiURL + '/rooms/delete',

    // END: Rooms Routes
}