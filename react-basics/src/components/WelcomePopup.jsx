import React, { useEffect } from "react";

function WelcomePopup() {
  useEffect(() => {
    alert("Welcome to our website!");
  }, []);

  return null;
}

export default WelcomePopup;
