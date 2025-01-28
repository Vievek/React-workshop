import React from "react";

function Button({ functions ,children ,cls}) {
  return (
    <>
      <button onClick={functions} className={cls}>{children}</button>
    </>
  );
}

export default Button;
