import React, {useState} from 'react'
import Button from './Button';

function Cart() {
    const [no, setNo] = useState(0);
  return (
    <>
        <div className='add-button'>
            <button className='in-dec-button' onClick={() => setNo((preNo) => preNo + 1)} > + </button>
            <div>{no}</div>
            <button className='in-dec-button' onClick={() => setNo((preNo) => preNo - 1)} > - </button>
        </div>
    </>
  );
}

export default Cart