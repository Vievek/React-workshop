import React from 'react'

function Button( {onClick} ) {
  return (
    <>
        <button onClick={onClick} />
    </>
  );
}

export default Button;