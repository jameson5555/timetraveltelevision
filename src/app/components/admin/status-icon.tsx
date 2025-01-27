"use client";

import { useState, useEffect } from 'react'
import { FaCircle } from "react-icons/fa";

interface StatusIconProps {
    videoId: string;
}

export default function StatusIcon({ videoId }: StatusIconProps) {
    const [isReady, setIsReady] = useState(false);
    const [isPlayable, setIsPlayable] = useState(false);

    async function isVideoPlayable(videoId: string) {
        try {
            const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
            const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=status`;
            const response = await fetch(url);
            const data = await response.json();
            const hasVideo = data?.items?.length > 0;
            const isEmbeddable = hasVideo && data.items[0].status.embeddable;
            const isPublic = hasVideo && data.items[0].status.privacyStatus !== 'private';
            setIsReady(true);
            return isEmbeddable && isPublic;
        } catch (error) {
            console.error('Error checking video playability:', error);
            setIsReady(true);
            return false as boolean;
        }
    }

    useEffect(() => {
        isVideoPlayable(videoId).then(playable => setIsPlayable(playable));
    }, [videoId]);

    return (
        <>
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
