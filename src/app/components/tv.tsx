'use client';

import styles from "@/app/components/tv.module.css";
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Tv({
    decade,
}: {
    decade: string;
}) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        //event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <section className={styles.tv}>
            <div className={styles["decade-" + decade]}>
                <div className={styles.outer3}>
                    <div className={styles.outer2}>
                        <div className={styles.outer1}>
                            <div className={styles.screen}>
                                <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
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