import React from 'react'

function Button( {onClick , children} ) {
  return (
    <>
        <button onClick={onClick} />
    </>
  );
}

export default Button;