import clsx from 'clsx';

export default function VideoBackground({ videoSrc, videoType }: { videoSrc: string, videoType: string }) {
    return (
        <video autoPlay loop muted playsInline className={clsx("absolute w-full h-full object-cover",
            videoType === 'desktop' ? 'hidden md:block' : 'block md:hidden'
        )}
        preload="metadata"
        poster='/loading.jpg'
        >
            <source src={`${videoSrc}.webm`} type="video/webm" />
            <source src={`${videoSrc}.mp4`} type="video/mp4"  />
        </video>
    )
};