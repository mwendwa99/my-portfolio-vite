import React from "react";

const SplashScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f00",
        height: "100vh",
      }}
    >
      <img src="loading.svg" alt="Loading..." />
    </div>
  );
};

export default SplashScreen;
