'use client';

import '@/app/globals.css';
import styles from "@/app/components/tv.module.css";
import YouTube, { YouTubeProps } from 'react-youtube';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let player: any;
const aspectRatioClasses = {
    '50s': 'ratio ratio-4x3',
    '60s': 'ratio ratio-4x3',
    '70s': 'ratio ratio-4x3',
    '80s': 'ratio ratio-4x3',
    '90s': 'ratio ratio-4x3',
    '00s': 'ratio ratio-16x9',
}
const tvSetSizes = {
    '50s': { width: 2000, height: 2000 },
    '60s': { width: 1446, height: 1920 },
    '70s': { width: 2000, height: 2000 },
    '80s': { width: 1920, height: 1446 },
    '90s': { width: 1920, height: 1446 },
    '00s': { width: 1920, height: 1080 },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Tv({
    decade,
    videos,
}: {
    decade: '50s' | '60s' | '70s' | '80s' | '90s';
    videos: Array<any>;
}) {
    videos.sort(() => Math.random() - 0.5);

    let currentVideoIndex = 0;
    const [isStatic, setIsStatic] = useState(true);

    const skipToNextVideo = () => {
        setIsStatic(true);
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0;
        }
        player.loadVideoById(videos[currentVideoIndex].id);
        player.mute(); // for testing
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        player = event.target;
        setIsStatic(true);
        if (player?.playerInfo?.videoData?.isPlayable) {
            setIsStatic(false);
            player.playVideo();
            player.mute(); // for testing
        }
    }

    const onPlayerPlay: YouTubeProps['onPlay'] = () => {
        setIsStatic(false);
    }

    const onPlayerError: YouTubeProps['onError'] = () => skipToNextVideo();
    const onPlayerEnd: YouTubeProps['onEnd'] = () => skipToNextVideo();

    const setFullScreen = () => {
        if (player === undefined) return;
        player.getIframe().requestFullscreen(); // todo: browser compatibility, animate, click to exit fullscreen
    }

    const opts: YouTubeProps['opts'] = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
        },
    };

    return (
        <section className={styles.tvcontainer}>
            <div className={styles.tv}>
                <div className={styles["decade-" + decade]}>
                    <div
                        className={clsx({
                            [styles.screen]: true,
                            [styles.showStatic]: isStatic === true,
                            [aspectRatioClasses[decade]]: true,
                        })}
                        onClick={() => setFullScreen()}
                    >
                        <YouTube
                            videoId={videos[currentVideoIndex]?.id}
                            opts={opts}
                            onReady={onPlayerReady}
                            onPlay={onPlayerPlay}
                            onError={onPlayerError}
                            onEnd={onPlayerEnd}
                            className={styles.video}
                        />
                        <Image
                            src="/static.webp"
                            width={499}
                            height={290}
                            className={styles.static}
                            alt=""
                        />
                    </div>
                    <Image
                        src={`/tvs/${decade}.png`}
                        width={tvSetSizes[decade]?.width || 1920}
                        height={tvSetSizes[decade]?.height || 1446}
                        className={styles.set}
                        alt=""
                    />
                    <div className={styles.dial} onClick={() => skipToNextVideo()}></div>
                </div>
            </div>
        </section>
    );
};
