import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div id="profile" className="pt-32 pb-44">
      <div className="max-w-[858px] w-full mx-auto">
        <h2 className="text-2xl text-center font-semibold">Profile</h2>
        <p className="text-lg text-center">Get to know me briefly.</p>
        <div className="block sm:flex justify-between mt-20">
          <div className="max-w-[289px] w-full h-[417px] relative mx-auto sm:mx-0 mb-6 sm:mb-0">
            <div className="absolute bottom-0 left-0 bg-profile"></div>
            <div className="absolute top-0 right-0">
              <Image
                src="/photo.jpg"
                width={264}
                height={395}
                alt="photo"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="max-w-[493px] w-full mx-auto sm:mx-0 px-4 sm:px-0">
            <p className="text-lg text-justify">
              I graduated from Stiki Malang in 2016, then I worked as a Network
              Engineer for 1 year at PT. Graha Informatika Nusantara, after that
              I worked as a Frontend Developer at SAM Design for approximately
              2.5 years, then I returned to work as a Frontend Developer at PT.
              Usaha Kreatif Indonesia for approximately 1.3 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
