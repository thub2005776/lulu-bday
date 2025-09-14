import Image from 'next/image';
export default function Loading() {
  return (
    <Image
      src="/loading.jpg"
      width={400}
      height={400}
      className="mx-auto w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white shadow-lg"
      alt="Loading..."  />
  );
};