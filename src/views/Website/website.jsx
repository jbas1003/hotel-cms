import { React, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useAuthContext from '../../context/AuthContext';
import Accommodations from '../../Utils/modals/Website/Accommodations/Accommodations';
import DTAccommodations from '../../Utils/modals/Website/Accommodations/DTAccommodations';
import Bookings from '../../Utils/modals/Website/Bookings/Bookings';
import DTBookings from '../../Utils/modals/Website/Bookings/DTBookings';
import DTRooms from '../../Utils/modals/Website/Rooms/DTRooms';
import Rooms from '../../Utils/modals/Website/Rooms/Rooms';
import DTRoomTypes from '../../Utils/modals/Website/RoomTypes/DTRoomTypes';
import RoomTypes from '../../Utils/modals/Website/RoomTypes/RoomTypes';

function Website() {
    const { employee } = useAuthContext();

    const [currentPage, setCurrentPage] = useState('');
    const [showAccommodations, setShowAccommodations] = useState();
    const [showRooms, setShowRooms] = useState(false)
    const [showRoomTypes, setShowRoomTypes] = useState(false);
    const [showBookings, setShowBookings] = useState(false);

    const CurrentPage = (page) => {
        setCurrentPage(page);

        switch (page) {
            case "accommodations":
                setShowAccommodations(true);
                setShowRooms(false);
                setShowRoomTypes(false);
                setShowBookings(false);
                break;
            
            case "rooms":
                setShowAccommodations(false);
                setShowRooms(true);
                setShowRoomTypes(false);
                setShowBookings(false);
                break;

            case "roomsTypes":
            setShowAccommodations(false);
            setShowRooms(false);
            setShowRoomTypes(true);
            setShowBookings(false);
            break;

            case "bookings":
                setShowAccommodations(false);
                setShowRooms(false);
                setShowRoomTypes(false);
                setShowBookings(true);
                break;

            default:
                break;
        }


    }

    return employee ? (
        <>

            <div className=" mb-10 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <Link onClick={() => CurrentPage("accommodations")} className={`inline-flex p-4 border-b-2 ${(currentPage === 'accommodations') ? "text-darkSeaGreen border-darkSeaGreen rounded-t-lg active dark:text-darkSeaGreen dark:border-darkSeaGreen group" : "border-transparent rounded-t-lg hover:text-darkSeaGreen hover:border-darkSeaGreen dark:hover:text-darkSeaGreen group"} `} aria-current="page">
                            <svg fill="currentColor" className={`w-5 h-5 mr-2 ${(currentPage === 'accommodations') ? "text-darkSeaGreen dark:text-darkSeaGreen" : "text-gray-400 group-hover:text-darkSeaGreen dark:text-gray-500 dark:group-hover:text-darkSeaGreen"} `} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                            </svg>
                            <span>Accommodations/Services</span>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link onClick={() => CurrentPage("rooms")} className={`inline-flex p-4 border-b-2 ${(currentPage === 'rooms') ? "text-darkSeaGreen border-darkSeaGreen rounded-t-lg active dark:text-darkSeaGreen dark:border-darkSeaGreen group" : "border-transparent rounded-t-lg hover:text-darkSeaGreen hover:border-darkSeaGreen dark:hover:text-darkSeaGreen group"} `} >
                            <svg aria-hidden="true" className={`w-5 h-5 mr-2 ${(currentPage === 'rooms') ? "text-darkSeaGreen dark:text-darkSeaGreen" : "text-gray-400 group-hover:text-darkSeaGreen dark:text-darkSeaGreen dark:group-hover:text-darkSeaGreen"} `} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
                            </svg>
                            <span>Rooms</span>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link onClick={() => CurrentPage("roomsTypes")} className={`inline-flex p-4 border-b-2 ${(currentPage === 'roomsTypes') ? "text-darkSeaGreen border-darkSeaGreen rounded-t-lg active dark:text-darkSeaGreen dark:border-darkSeaGreen group" : "border-transparent rounded-t-lg hover:text-darkSeaGreen hover:border-darkSeaGreen dark:hover:text-darkSeaGreen group"} `} >
                            <svg  className={`w-5 h-5 mr-2 ${(currentPage === 'roomsTypes') ? "text-darkSeaGreen dark:text-darkSeaGreen" : "text-gray-400 group-hover:text-darkSeaGreen dark:text-darkSeaGreen dark:group-hover:text-darkSeaGreen"} `} fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                            </svg>
                            <span>Room Types</span>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link onClick={() => CurrentPage("bookings")} className={`inline-flex p-4 border-b-2 ${(currentPage === 'bookings') ? "text-darkSeaGreen border-darkSeaGreen rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "border-transparent rounded-t-lg hover:text-darkSeaGreen hover:border-darkSeaGreen dark:hover:text-darkSeaGreen group"} `}>
                            <svg fill="none" className={`w-5 h-5 mr-2 ${(currentPage === 'bookings') ? "text-darkSeaGreen dark:text-darkSeaGreen" : "text-gray-400 group-hover:text-darkSeaGreen dark:text-darkSeaGreen dark:group-hover:text-darkSeaGreen"} `} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path>
                            </svg>
                            <span>Bookings</span>
                        </Link>
                    </li>
                </ul>
            </div>
            
            <Accommodations show={showAccommodations}>
                <DTAccommodations />
            </Accommodations>

            <Rooms show={showRooms}>
                <DTRooms />
            </Rooms>

            <RoomTypes show={showRoomTypes}>
                <DTRoomTypes />
            </RoomTypes>

            <Bookings show={showBookings}>
                <DTBookings />
            </Bookings>

        </>
    ) : <Navigate to="/login" />
}

export default Website;