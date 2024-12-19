'use client';

import styles from "@/app/components/tv.module.css";
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Tv({
    decade,
    videos,
}: {
    decade: string;
    videos: Array<any>;
}) {
    videos.sort(() => Math.random() - 0.5);

    let currentVideoIndex = 0;

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        console.log('isPlayable', event.target.playerInfo.videoData.isPlayable);
        if (event?.target?.playerInfo?.videoData?.isPlayable) {
            event.target.playVideo();
        }
    }

    const onPlayerError: YouTubeProps['onError'] = (event) => {
        console.log('onPlayerError', event);
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0;
        }
        console.log('currentVideoIndex', currentVideoIndex);
        event.target.loadVideoById(videos[currentVideoIndex].id);
    }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            //autoplay: 1,
        },
    };
    return (
        <section className={styles.tv}>
            <div className={styles["decade-" + decade]}>
                <div className={styles.outer3}>
                    <div className={styles.outer2}>
                        <div className={styles.outer1}>
                            <div className={styles.screen}>
                                <YouTube
                                    videoId={videos[currentVideoIndex].id}
                                    opts={opts}
                                    onReady={onPlayerReady}
                                    onError={onPlayerError}
                                />
                            </div>
                        </div>
                        <div className={styles.dial}>
                            <div className={`${styles.control} ${styles.control1}`}>></div>
                            <div className={`${styles.control} ${styles.control2}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
