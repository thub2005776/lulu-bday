import Link from 'next/link';
import Navbar from './ui/navbar';
import VideoBackground from './ui/video';
export const experimental_ppr = true;

export default function Home() {
  return (
    <div>


      <VideoBackground videoSrc="/desktop-video" videoType='desktop' />
      <VideoBackground videoSrc="/mobile-video" videoType='mobile' />


      <Navbar />

      <Link href="/minigame">
        <button className="absolute bottom-1/5 md:left-1/6 left-1/2 -translate-x-1 -translate-y-1/2 hover:bg-white bg-white/85 text-blue-500 font-bold py-2 px-4 rounded-full backdrop-blur-sm hover:cursor-pointer z-10 flex items-center gap-2 shadow-lg shoadow-gray-500">
          Start
        </button>
      </Link>
    </div>

  );
}