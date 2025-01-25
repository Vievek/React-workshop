import React from "react";

function Button({ functions ,children}) {
  return (
    <>
      <button onClick={functions}>{children}</button>
    </>
  );
}

export default Button;
