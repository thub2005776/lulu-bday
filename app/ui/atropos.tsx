"use client";
import Atropos from 'atropos/react';
import 'atropos/css';
import Image from 'next/image';

export default function AtroposComponent() {
   return (
      <Atropos
      >
         {/* desktop */}

         <Image
                   src="/desktop-bg.jpg"
                   data-atropos-offset="0"
                   width={400}
                   height={400}
                className="w-screen h-screen overflow-cover object-cover hidden md:block"
                   alt="Loading..."  />
        
         {/* mobile */}
        
         <Image
            src="/mobile-bg.jpg"
            data-atropos-offset="0"
            width={400}
            height={400}
            className=" w-screen h-screen overflow-hidden object-cover block md:hidden"
            alt="Loading..." />
      </Atropos >
   );
}