"use client";

import YouTube, { YouTubeProps } from 'react-youtube';
import { useState } from 'react'
import { FaCircle } from "react-icons/fa";

interface StatusIconProps {
    videoId: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let player: any;

export default function StatusIcon({ videoId }: StatusIconProps) {
    const [isReady, setIsReady] = useState(false);
    const [isPlayable, setIsPlayable] = useState(false);
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        player = event.target;
        setIsReady(true);
        if (player?.playerInfo?.videoData?.isPlayable) {
            setIsPlayable(true);
        }
        player.cueVideoById(videoId); // workaround for issue where onError isn't thrown when video is unplayable
    }
    const onPlayerError: YouTubeProps['onError'] = () => {
        setIsReady(true);
        setIsPlayable(false);
    };

    const opts: YouTubeProps['opts'] = {
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <>
            <div className="d-none">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={onPlayerReady}
                    onError={onPlayerError}
                />
            </div>
            {isReady ? (
                isPlayable ? (
                    <span className="text-success d-flex justify-content-center"><FaCircle /></span>
                ) : (
                    <span className="text-danger d-flex justify-content-center"><FaCircle /></span>
                )
            ) : (
                <span className="spinner d-block mx-auto"></span>
            )}
        </>
        
    );
}
