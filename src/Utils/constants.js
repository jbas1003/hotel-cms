export const myApiURL = 'http://hotelcmsv2-env.eba-8vgm8p3v.ap-northeast-1.elasticbeanstalk.com/api/';

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
    updateRoom: myApiURL + '/rooms/update/',
    deleteRoom: myApiURL + '/rooms/delete/',
    // UDRoom: myApiURL + '/rooms/',

    // END: Rooms Routes

    // START: Upload

    upload: myApiURL + '/upload',

    // END: Upload
}