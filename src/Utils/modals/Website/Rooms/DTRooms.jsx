import React, { useState, useEffect } from 'react';
import { AddRoom, DeleteRoom, GetRooms, UpdateRoom } from '../../../RoomMethods';
import { GetRoomTypes } from '../../../RoomTypeMethods';
import ModalDeleteWarning from '../../Employees/ModalDeleteWarning';
import ModalEditEmployee from '../../Employees/ModalEditEmployee';
import ModalAddRoom from './Modals/ModalAddRoom';

const DTRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [roomTypes, setRoomTypes] = useState([]);

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // const [popoverUpload, setPopoverUpload] = useState(false);

    const [roomId, setRoomId] = useState();
    const [roomNumber, setRoomNumber] = useState();
    const [roomType, setRoomType] = useState();
    const [roomTypeName, setRoomTypeName] = useState();

    // START: DT Search function

    const tableSearch = () => {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("tableSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("roomTypesDTbl");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the        search query
        for (i = 1; i < tr.length; i++) {
            td = tr[i];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) >= 0) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    // END: DT Search function

    const addRoom = () => {
        AddRoom(roomNumber, roomType)
        .then(result => {return result})
        .catch(error => {return error});

        setShowAdd(false);
        getRooms();
        getRoomTypes();
    }

    const editRoom = (roomId, roomNumber, roomTypeId, roomTypeName) => {
        setRoomId(roomId);
        setRoomNumber(roomNumber);
        setRoomType(roomTypeId);
        setRoomTypeName(roomTypeName);
        setShowEdit(true);
    }

    const updateRoom = () => {
        UpdateRoom(roomId, roomNumber, roomType)
        .then(result => {return result.json()})
        .then(result => {return result})
        .catch(error => {return error});

        setShowEdit(false);
        getRooms()
        getRoomTypes();
    }

    const showDeleteWarning = (roomId, roomNumber, roomName) => {
        setRoomId(roomId);
        setRoomNumber(roomNumber);
        setRoomTypeName(roomName);

        setShowDelete(true);
    }

    const deleteRoom = () => {
        
        DeleteRoom(roomId)
        .then(result => {return result.json()})
        .then(result => {return result})
        .catch(error => {return error});

        setShowDelete(false);
        getRoomTypes();
        getRooms();
    }

    const getRooms = () => {
        GetRooms()
        .then(result => { return result.json() })
        .then(result => setRooms(result))
        .catch(error => { return error });
    }

    const getRoomTypes = () => {
        GetRoomTypes()
        .then(result => {return result.json()})
        .then(result => setRoomTypes(result))
        .catch(error => {return error});
    }

    useEffect(() => {
        getRooms();
        getRoomTypes();
    }, []);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className='flex items-center justify-between pb-4'>
                <div className="pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-darkGreen dark:text-darkGreen" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="tableSearch" onKeyUp={tableSearch} className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <div>
                    <button type="button"
                        className="flex items-center text-white bg-darkSeaGreen hover:bg-darkGreen focus:outline-none focus:ring-4 focus:ring-seaGreen font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-darkSeaGreen dark:hover:bg-darkGreen dark:focus:ring-darkGreen"
                        onClick={() => setShowAdd(true)}
                    >
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Add New Room</span>
                    </button>
                </div>
            </div>
            
            <table id='roomTypesDTbl' className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-whiteSmoke uppercase bg-darkSeaGreen dark:bg-darkSeaGreen dark:text-whiteSmoke">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Room Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Room Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created On
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Updated On
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    { 
                        rooms ?
                            rooms.map((items) => (
                                <tr id={items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 boarder-gray-700 hover:bg-lightSeaGreen">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <p>{items.room_no}</p>
                                    </th>
                                    <td className="px-6 py-4">
                                    <p>{items.name}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p>{items.created_at}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p>{items.updated_at}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" style={{ cursor: "pointer", width: "20%" }}>
                                        <button type="button"
                                            className="text-red-800 border border-red-800 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                                            onClick={() => showDeleteWarning(items.id, items.room_no, items.name)}
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button type="button"
                                            className="text-green-800 border border-green-800 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800"
                                            onClick={() => editRoom(items.id, items.room_no, items.room_type_id, items.name)}
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                        <label htmlFor="dropzone-file" data-popover-target="popover-default" className="inline-flex flex-col items-center justify-center w-48 h-9 border-2 border-darkSeaGreen border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="w-5 h-5 text-darkSeaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </td>
                                </tr>
                            ))
                        :
                            <tr>
                                <td colSpan={5} align="center" className='text-3xl'>No Records Found...</td>
                            </tr>
                    }
                </tbody>
            </table>

            <ModalAddRoom show={showAdd} setShow={setShowAdd}>
                <div className="space-y-6" action="#">
                    <div className='flex flex-row justify-between gap-5'>
                        <div className='basis-1/2'>
                        <div className="relative">
                                <input type="text" id="fo_room_no" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-darkGreen peer" placeholder=" " onChange={ e => { setRoomNumber(e.target.value) }}  />
                                <label htmlFor="fo_room_no" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Room Number</label>
                            </div>
                        </div>

                        <div className='basis-1/2'>
                        <div className="relative">
                            <select id="fo_room_type" onChange={(e)=>setRoomType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkGreen focus:border-darkGreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose Room Type</option>
                            {
                                roomTypes ?
                                    roomTypes.map(items => (
                                        <option value={items.room_type_id}>{items.name}</option>
                                    ))
                                :
                                    <option>No Records Found...</option>
                            }
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='basis-1/4'>
                            <button type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={addRoom}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </ModalAddRoom>

            <ModalEditEmployee show={showEdit} setShow={setShowEdit}>
                <div className="space-y-6" action="#">
                    <div className='flex flex-row justify-between gap-5'>
                        <div className='basis-1/2'>
                        <div className="relative">
                                <input type="text" id="fo_room_no" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-darkGreen peer" placeholder=" " value={roomNumber} onChange={ e => { setRoomNumber(e.target.value) }}  />
                                <label htmlFor="fo_room_no" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Room Number</label>
                            </div>
                        </div>

                        <div className='basis-1/2'>
                        <div className="relative">
                            <select id="fo_room_type" onChange={(e)=>setRoomType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkGreen focus:border-darkGreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option >Choose Room Type</option>
                            {
                                roomTypes ?
                                    roomTypes.map(items => (
                                        items.name === roomTypeName ? <option selected>{roomTypeName}</option> : <option value={items.room_type_id}>{items.name}</option>
                                        
                                    ))
                                :
                                    <option>No Records Found...</option>
                            }
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='basis-1/4'>
                            <button type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={updateRoom}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </ModalEditEmployee>

            <ModalDeleteWarning show={showDelete} setShow={setShowDelete}>
                <div className="space-y-6" action="#">
                    <div className='flex flex-row justify-between'>
                        <div className='basis-auto'>
                            <div className='space-y-6 relative'>
                                <span>You are about to delete <em><strong>Room number: {roomNumber}, {roomTypeName}</strong></em>. Click "Delete" to continue.</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <div className='basis-1/4'>
                            <button type="submit"
                                className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                onClick={deleteRoom}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </ModalDeleteWarning>
        </div>
    )
}

export default DTRooms