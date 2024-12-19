'use client';

import styles from "@/app/components/tv.module.css";
import YouTube, { YouTubeProps } from 'react-youtube';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react'

let player: any;

export default function Tv({
    decade,
    videos,
}: {
    decade: string;
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
        console.log('skip to video ', currentVideoIndex);
        player.loadVideoById(videos[currentVideoIndex].id);
        player.mute(); // for testing
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        player = event.target;
        setIsStatic(true);
        console.log('isPlayable', player.playerInfo.videoData.isPlayable);
        if (player?.playerInfo?.videoData?.isPlayable) {
            console.log('onPlayerReady set static to false');
            setIsStatic(false);
            player.playVideo();
            player.mute(); // for testing
        }
    }

    const onPlayerPlay: YouTubeProps['onPlay'] = () => {
        console.log('onPlayerPlay set static to false');
        setIsStatic(false);
    }

    const onPlayerError: YouTubeProps['onError'] = () => skipToNextVideo();
    const onPlayerEnd: YouTubeProps['onEnd'] = () => skipToNextVideo();

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
        },
    };

    return (
        <section className={styles.tv}>
            <div className={styles["decade-" + decade]}>
                <div className={styles.outer3}>
                    <div className={styles.outer2}>
                        <div className={styles.outer1}>
                            <div className={clsx({
                                    [styles.screen]: true,
                                    [styles.showStatic]: isStatic === true,
                                })}>
                                <YouTube
                                    videoId={videos[currentVideoIndex]?.id}
                                    opts={opts}
                                    onReady={onPlayerReady}
                                    onPlay={onPlayerPlay}
                                    onError={onPlayerError}
                                    onEnd={onPlayerEnd}
                                />
                                <Image
                                    src="/static.webp"
                                    width={640}
                                    height={390}
                                    className={styles.static}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={styles.dial} onClick={() => skipToNextVideo()}>
                            <div className={`${styles.control} ${styles.control1}`}></div>
                            <div className={`${styles.control} ${styles.control2}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
