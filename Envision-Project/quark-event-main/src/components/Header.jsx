import React from "react";
// import envisionVideo from "/src/assets/video/envision.MP4";

const Header = () => {
  return (
    <header className="cb-topcover -inverse relative">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          preload="auto"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={envisionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
        <div className="cb-topcover-title text-4xl font-bold">QUARK</div>
        <h1 className="text-5xl font-extrabold">Envision 24 - 25</h1>
      </div>
    </header>
  );
};

export default Header;
