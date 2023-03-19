import React from 'react'

const RoomTypes = ({children, show}) => {
    const content = show && (<>{ children }</>);
    return content;
}

export default RoomTypes