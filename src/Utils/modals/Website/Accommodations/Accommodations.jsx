import React from 'react'

const Accommodations = ({children, show}) => {
  const content = show && (<>{ children }</>);
  return content;
}

export default Accommodations