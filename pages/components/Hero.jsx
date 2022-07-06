import React from "react";

function Hero({heading, message}) {
  return (
    <div className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h2 className="text-5xl font-bold">{heading},</h2>
        <p className="py-5 text-5xl font-bold">{message}</p>
        {/* <button className="px-8 py-2 border">Book</button> */}
      </div>
    </div>
  );
}

export default Hero;
