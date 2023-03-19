import React from 'react'

const Bookings = ({children, show}) => {
  const content = show && (<>{ children }</>);
  return content;
}

export default Bookings