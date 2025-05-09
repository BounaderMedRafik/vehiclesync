import React from "react";
import Image from "next/image";
import TransparentCard from "./TransparentCard";

const LandingPageInfoBlock = () => {
  return (
    <TransparentCard>
      <Image src="/logo.png" alt="Logo" width={300} height={150} />
      <h1 className="text-2xl text-white font-bold">Welcome to SmartAuto</h1>
      <p className="text-white">The best vehicle maintence tracking app!</p>
    </TransparentCard>
  );
};

export default LandingPageInfoBlock;
