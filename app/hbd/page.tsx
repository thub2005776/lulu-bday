import VideoBackground from "../ui/video"
import { gluten, birthstone } from "../ui/fonts"

export default function HBDPage() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <VideoBackground videoSrc="/desktop-hbd-video" videoType='desktop' />
            <VideoBackground videoSrc="/mobile-hbd-video" videoType='mobile' />
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className={`${gluten.className} text-6xl md:text-8xl mb-4 animate-pulse`}>Happy Birthday To LuLu!</h1>
                <h2 className={`${birthstone.className} text-4xl md:text-5xl animate-pulse`}>Wishing you a day filled with love, joy, and unforgettable moments.</h2>
            </div>
        </div>
    );
};
