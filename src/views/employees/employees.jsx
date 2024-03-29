import { React, useState, useEffect } from 'react';
import { AddNewemployee, DeleteEmployee, GetEmployees, UpdateEmployee } from '../../Utils/EmployeeMethods';
import ModalAdd from '../../Utils/modals/Employees/ModalAddEmployee';
import ModalDeleteWarning from '../../Utils/modals/Employees/ModalDeleteWarning';
import ModalEditEmployee from '../../Utils/modals/Employees/ModalEditEmployee';
import useAuthContext from '../../context/AuthContext';

const Employees = () => {
    const { employee } = useAuthContext();
    const token = employee.token;

    const [id, setId] = useState();
    const [employeeId, setEmployeeId] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [getAllEmployees, setGetAllEmployees] = useState([]);

    const [showAddEmployee, setShowAddEmployee] = useState(false);
    const [showEditEmployee, setShowEditEmployee] = useState(false);
    const [showDeleteWarning, setShowDeleteWarning] = useState(false);

    function addNewEmployee () {
        AddNewemployee(employeeId, firstName, lastName, contactNumber, email, username, password, token)
        getEmployees();

        setShowAddEmployee(false);
    }

    function editemployee (id, employeeId, firstName, lastName, email, contactNumber, username) {
        setId(id)
        setEmployeeId(employeeId)
        setFirstName(firstName)
        setLastName(lastName)
        setContactNumber(contactNumber)
        setEmail(email)
        setUsername(username)

        setShowEditEmployee(true)
    }

    function updateEmployee () {
        UpdateEmployee(id, employeeId, firstName, lastName, contactNumber, email, username, token)
        getEmployees();
        setShowEditEmployee(false);
    }

    function ShowDeleteWarning (id, firstName, lastName) {
        setId(id)
        setFirstName(firstName)
        setLastName(lastName)
        setShowDeleteWarning(true)
    }

    function deleteEmployee () {
        DeleteEmployee(id, token)
        .then(() => {getEmployees();})
        setShowDeleteWarning(false)
    }
    
    const getEmployees = () => {
        GetEmployees(_result => {
            setGetAllEmployees(_result);
        });
    }

    function tableSearch() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("tableSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("employeeDTbl");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the        search query
        for (i = 1; i < tr.length; i++) {
            td = tr[i];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    useEffect(() => {
        getEmployees();
    }, []);

  return (
        <>
            <div className="relative shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between pb-4">
                    <div className="pb-4 bg-white dark:bg-gray-900">
                        <label htmlFor="tableSearch" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-darkGreen dark:text-darkSeaGreen" aria-hidden="true" fill="darkGreen" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="tableSearch" onKeyUp={tableSearch} className="block p-2 pl-10 text-sm text-darkSeaGreen border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-darkSeaGreen focus:border-darkSeaGreen dark:bg-gray-700 dark:border-gray-600 dark:placeholder-darkSeaGreen dark:text-white dark:focus:ring-darkSeaGreen dark:focus:border-darkGreen" placeholder="Search for items" />
                        </div>
                    </div>
                    <div>
                        <button type="button"
                            className="flex items-center text-white bg-darkSeaGreen hover:bg-darkSeaGreen focus:outline-none focus:ring-4 focus:ring-seaGreen font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-darkSeaGreen dark:hover:bg-darkSeaGreen dark:focus:ring-darkGreen"
                            onClick={() => setShowAddEmployee(true)}
                        >
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Add New Employee</span>
                        </button>
                    </div>
                </div>
                <div className='overflow-x-auto'>
                    <table id='employeeDTbl' className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-whiteSmoke uppercase bg-darkSeaGreen dark:bg-darkSeaGreen dark:text-whiteSmoke">
                            <tr id='dataRow'>
                                <th scope="col" className="px-6 py-3">
                                    Employee ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                getAllEmployees.map((items) => (
                                    <tr key={items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-lightSeaGreen dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className='editable' style={{ cursor: "pointer" }}>
                                                { items.employee_id }
                                            </div>
                                        </td>
                                        
                                        <td className="px-6 py-4  w-12 whitespace-nowrap" style={{ cursor: "pointer" }}>
                                            <div className='editable' style={{ cursor: "pointer" }}>
                                                { items.first_name } { items.last_name }
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap" style={{ cursor: "pointer" }}>
                                            <div className='editable' style={{ cursor: "pointer" }}>
                                                {items.contact_no}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap" style={{ cursor: "pointer" }}>
                                            <div className='editable' style={{ cursor: "pointer" }}>
                                                {items.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap" style={{ cursor: "pointer" }}>
                                            <div className='editable' style={{ cursor: "pointer" }}>
                                                {items.username}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap" style={{ cursor: "pointer", width: "20%" }}>
                                            <button type="button"
                                                className="text-red-800 border border-red-800 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                                                onClick={() => ShowDeleteWarning(items.id, items.first_name, items.last_name)}
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button type="button"
                                                className="text-green-800 border border-green-800 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800"
                                                onClick={() => editemployee(items.id, items.employee_id, items.first_name, items.last_name, items.email, items.contact_no, items.username, items.password)}
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        <ModalAdd show={showAddEmployee} setShow={setShowAddEmployee}>
            <div className="space-y-6" action="#">
                <div className='flex flex-row justify-between'>
                    <div className=' basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_employeeId" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setEmployeeId(e.target.value) }} />
                            <label htmlFor="fo_employeeId" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Employee Id</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-5'>
                    <div className='basis-1/2'>
                    <div className="relative">
                            <input type="text" id="fo_first_name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setFirstName(e.target.value) }}  />
                            <label htmlFor="fo_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First Name</label>
                        </div>
                    </div>

                    <div className='basis-1/2'>
                    <div className="relative">
                            <input type="text" id="fo_last_name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setLastName(e.target.value) }} />
                            <label htmlFor="fo_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last Name</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between gap-5'>
                <div className='basis-1/2'>
                    <div className="relative">
                            <input type="text" id="fo_contactNumber" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setContactNumber(e.target.value) }} />
                            <label htmlFor="fo_contactNumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Contact Number</label>
                        </div>
                    </div>

                    <div className='basis-1/2'>
                    <div className="relative">
                            <input type="text" id="fo_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setEmail(e.target.value) }} />
                            <label htmlFor="fo_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between gap-5'>
                <div className='basis-1/2'>
                    <div className="relative">
                            <input type="text" id="fo_username" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setUsername(e.target.value) }} />
                            <label htmlFor="fo_username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                        </div>
                    </div>

                    <div className='basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ e => { setPassword(e.target.value) }} />
                            <label htmlFor="fo_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-end'>
                    <div className='basis-1/4'>
                        <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={addNewEmployee}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </ModalAdd>

        <ModalEditEmployee show={showEditEmployee} setShow={setShowEditEmployee}>
            <div className="space-y-6" action="#">
                <div className='flex flex-row justify-between'>
                    <div className=' basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_employeeId" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={employeeId} onChange={ e => { setEmployeeId(e.target.value) }} />
                            <label htmlFor="fo_employeeId" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Employee Id</label>
                        </div>
                    </div>

                    <div className='basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_username" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={username} onChange={ e => { setUsername(e.target.value) }} />
                            <label htmlFor="fo_username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-5'>
                    <div className='basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_first_name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={firstName} onChange={ e => { setFirstName(e.target.value) }}  />
                            <label htmlFor="fo_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First Name</label>
                        </div>
                    </div>

                    <div className='basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_last_name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={lastName} onChange={ e => { setLastName(e.target.value) }} />
                            <label htmlFor="fo_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last Name</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between gap-5'>
                    <div className='basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_contactNumber" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={contactNumber} onChange={ e => { setContactNumber(e.target.value) }} />
                            <label htmlFor="fo_contactNumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Contact Number</label>
                        </div>
                    </div>

                    <div className='basis-1/2'>
                        <div className="relative">
                            <input type="text" id="fo_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={email} onChange={ e => { setEmail(e.target.value) }} />
                            <label htmlFor="fo_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-end'>
                    <div className='basis-1/4'>
                        <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={updateEmployee}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </ModalEditEmployee>

        <ModalDeleteWarning show={showDeleteWarning} setShow={setShowDeleteWarning}>
            <div className="space-y-6" action="#">
                <div className='flex flex-row justify-between'>
                    <div className='basis-auto'>
                        <div className='space-y-6 relative'>
                            <span>You are about to delete {firstName}'s record. Click "Delete" to continue.</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <div className='basis-1/4'>
                        <button type="submit"
                            className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            onClick={deleteEmployee}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </ModalDeleteWarning>
        </>
  )
}

export default Employees;