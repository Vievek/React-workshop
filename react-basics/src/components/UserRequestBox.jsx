import React, { useRef } from "react";

function UserRequestBox() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value); // Show input value in alert
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter request" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserRequestBox;
