'use client';

import { useRef } from 'react';
import Image from 'next/image';

export default function Lightbox({ src, alt, className, width, height}: { src: string, alt: string, className?: string, width: number, height: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openLightbox = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  };

  const closeLightbox = () => {
    if (dialogRef.current) dialogRef.current.close();
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer ${className}`}
        onClick={openLightbox}
      />
      <dialog ref={dialogRef} onClick={closeLightbox} className="m-auto max-w-screen max-h-screen border-0 p-0 bg-transparent w-[90vw] h-[99vh] backdrop:bg-black/85 focus:outline-none outline-none" >
            <button className='md:hidden z-50 text-md text-white h-[1.5rem] w-[1.5rem] border-1 rounded-lg border-white text-center absolute top-5 active:bg-gray-50/60 focus:outline-none'>X</button>
            <Image onClick={e => e.stopPropagation()} fill objectFit='contain' src={src} alt="Enlarged view" className='max-w-fit max-h-fit translate-x-[-50%] translate-y-[-50%]' style={{left: '50%', top: '50%'}}/>
      </dialog>
    </>
  );
}