import React, {useState} from 'react'
import Button from './Button';

function Cart() {
    const [no, setNo] = useState(0);
  return (
    <>
        <div className='add-button'>
            <Button onClick={() => setNo((preNo) => preNo + 1)} children='+'></Button>
            <div>{no}</div>
            <Button onClick={() => setNo((preNo) => preNo - 1)} children='-'></Button>
        </div>
    </>
  );
}

export default Cart