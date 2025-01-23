"use client";

import { useState } from 'react'
import { FaCircle } from "react-icons/fa";

interface StatusIconProps {
    videoId: string;
}

async function isVideoPlayable(videoId: string) {
    try {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=status`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data:', data);
        //return data.items[0];
    } catch (error) {
        console.error('Error checking video playability:', error);
        return false;
    }
}

export default function StatusIcon({ videoId }: StatusIconProps) {
    const [isReady, setIsReady] = useState(false);
    const [isPlayable, setIsPlayable] = useState(false);

    isVideoPlayable(videoId).then(playable => setIsPlayable(playable));

    return (
        <>
            {isReady ? (
                isPlayable ? (
                    <span className="text-success d-flex justify-content-center"><FaCircle /></span>
                ) : (
                    <span className="text-danger d-flex justify-content-center"><FaCircle /></span>
                )
            ) : (
                // <span className="spinner d-block mx-auto"></span>
                <span className="text-success d-flex justify-content-center"><FaCircle /></span>
            )}
        </>
        
    );
}
