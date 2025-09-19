import Link from 'next/link';
import Navbar from './ui/navbar';
import Image from 'next/image';
import AtroposComponent from './ui/atropos';
import Loading from './ui/loading';
export const experimental_ppr = true;

export default function Home() {
  return (
    <div>
      <div className='relative top-0 left-0 bg-gradient-to-r from-sky-300 to-blue-500/80 w-full h-screen overflow-hidden'>
        <AtroposComponent />
        <Navbar />
      </div>

      <div className="absolute sm:left-[23%] md:left-[55%] md:bottom-5 left-1.5 top-[55%] w-[27rem] h-[15rem] -translate-x-1 -translate-y-1/2  p-4 rounded-2xl backdrop-blur-sm hover:cursor-pointer z-10 shadow-lg shoadow-gray-500">
        <Image
          src="/play-now.png"
          alt="minigame"
          width={400}
          height={400}
          className="w-fit rounded-2xl animate-pulse"
        />
        <Link href="/minigame">
          <button className="absolute left-1/4 -translate-x-1 -translate-y-1/2 hover:bg-white bg-white/75 text-blue-500 font-bold py-2 px-16 rounded-full backdrop-blur-sm hover:cursor-pointer z-10 flex items-center gap-2 shadow-lg shoadow-gray-500">
            Play Now
          </button>
        </Link>
      </div>
    </div>

  );
}