'use client';

import '@/app/globals.css';
import styles from "@/app/components/tv.module.css";
import YouTube, { YouTubeProps } from 'react-youtube';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react'
import { notFound } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let player: any;
let currentVideoIndex = 0;
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

    // check if video_id does not exist in videos[currentVideoIndex]
    if (!videos[currentVideoIndex]?.video_id) {
        notFound();
    }

    const [isStatic, setIsStatic] = useState(true);

    const skipToNextVideo = () => {
        const iframe = player.getIframe();
        const screen = iframe.closest(`.${styles.screen}`);
        screen.classList.add(`${styles.showStatic}`); // can't use useState here without re-rendering the whole component
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0;
        }
        player.loadVideoById(videos[currentVideoIndex]?.video_id);
        //player.mute(); // for testing
        setTimeout(() => {
            screen.classList.remove(`${styles.showStatic}`);
        }, 1000);
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        player = event.target;
        setIsStatic(true);
        if (player?.playerInfo?.videoData?.isPlayable) {
            setIsStatic(false);
            player.playVideo();
            //player.mute(); // for testing
        }
    }

    const onPlayerPlay: YouTubeProps['onPlay'] = () => {
        setIsStatic(false);
    }

    const onPlayerError: YouTubeProps['onError'] = () => skipToNextVideo();
    const onPlayerEnd: YouTubeProps['onEnd'] = () => skipToNextVideo();

    const setFullScreen = () => {
        if (player === undefined) return;

        const state = player.getPlayerState();
        if (state === 1) {
            player.getIframe().requestFullscreen();
        } else {
            player.playVideo();
        }
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
                            videoId={videos[currentVideoIndex]?.video_id}
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
                            priority
                        />
                    </div>
                    <Image
                        src={`/tvs/${decade}.png`}
                        width={tvSetSizes[decade]?.width || 1920}
                        height={tvSetSizes[decade]?.height || 1446}
                        className={styles.set}
                        alt=""
                        priority
                    />
                    <div className={styles.dial} onClick={() => skipToNextVideo()}></div>
                </div>
            </div>
        </section>
    );
};
