"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Page() {
  const bulRef = useRef<HTMLDivElement | null>(null);
  const bulRef2 = useRef<HTMLDivElement | null>(null);
  // GSAP animation
  useEffect(() => {
    gsap.to(bulRef.current, 
      { scale: 0,
        duration: 3,
        repeat: -1
      }
    );
  }, []);
  useEffect(()=>{
    gsap.to(bulRef2.current,
      {
        rotateX: 180,
        rotateY: 180,
        duration: 3,
        repeat: -1
      }
    )
  },[])

  return (
    <>
      <div className="h-screen w-full bg-red-600 flex justify-center items-center">
        <div ref={bulRef} className="h-9 w-9 bg-black"></div>
      </div>
      <div className="h-screen w-full bg-blue-600 flex justify-center items-center">
      <div ref={bulRef2} className="h-9 w-9 bg-black"></div>
      </div>
      <div className="h-screen w-full bg-green-600 flex justify-center items-center">
        if the above animations are not working then something is wrong with the installation
      </div>
    </>
  );
}

export default Page;
