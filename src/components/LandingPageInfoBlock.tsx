import React from "react";
import Image from "next/image";
import TransparentCard from "./TransparentCard";

const LandingPageInfoBlock = () => {
  return (
    <TransparentCard>
      <Image
        src="/vehicleSync_2048_600.png"
        alt="Logo"
        width={300}
        height={150}
      />
      <h1 className="text-2xl text-white font-bold">Welcome to VehicleSync</h1>
      <p className="text-white">The best vehicle maintence tracking app!</p>
    </TransparentCard>
  );
};

export default LandingPageInfoBlock;
