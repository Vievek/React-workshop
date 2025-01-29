import React from 'react'

function Button( {onClick, children} ) {
  return (
    <>
        <button className='in-dec-button' onClick={onClick} >{children}</button>
    </>
  );
}

export default Button;