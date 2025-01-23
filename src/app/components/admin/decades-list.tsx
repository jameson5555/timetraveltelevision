"use client";

import React from 'react';
import { useRouter } from 'next/navigation'
import { DecadeListItem } from '@/app/lib/definitions';
import StatusIcon from '@/app/components/admin/status-icon';
import DeleteButton from '@/app/components/admin/delete-button';
import styles from '@/app/components/admin/decades-list.module.css';
import { FaPlus } from "react-icons/fa";
import { connection } from 'next/server'

export default function DecadesList({
    decades,
}: {
    decades: DecadeListItem[];
}) {
    const router = useRouter();
    React.useEffect(() => {
        const connect = async () => {
            await connection(); // prevent caching for this component
        };
        connect();
    }, []);

    const handleAdd = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const row = (event.target as HTMLElement).closest('tr');
        if (!row) {
            console.error('Row not found');
            return;
        }
        const decade = row.querySelector<HTMLInputElement>('[data-field="decade"]')?.value;
        const videoId = row.querySelector<HTMLInputElement>('[data-field="video_id"]')?.value;
        const description = row.querySelector<HTMLInputElement>('[data-field="description"]')?.value;
        
        try {
            const response = await fetch(`/api/mysql/add-video`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ decade, videoId, description }),
            });

            const data = await response.json();

            if (data.success) {
                router.refresh()
            } else {
                console.error('Failed to add video:', data.error);
            }
        } catch (error) {
            console.error('Error adding video:', error);
        }
    };

    return (
        <div className="table-responsive">
            <table className={`${styles.decadeslist} table table-dark table-hover`}>
                {decades.map((decadeItem) => (
                    <React.Fragment key={decadeItem.decade}>
                        <thead>
                            <tr>
                                <th className="bg-transparent pt-4" colSpan={4}>{decadeItem.decade} Videos ({decadeItem.videos.length})</th>
                            </tr>
                            <tr>
                                <th className={styles.status}>Status</th>
                                <th>Video ID</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody key={`${decadeItem.decade}-body`}>
                            {decadeItem.videos.map((video, index) => (
                                <React.Fragment key={video.video_id}>
                                    <tr key={video.video_id}>
                                        <td className={styles.status}><StatusIcon videoId={video.video_id}/></td>
                                        <td>{video.video_id}</td>
                                        <td>{video.description}</td>
                                        <td className={styles.delete}><DeleteButton videoId={video.video_id}/></td>
                                    </tr>
                                    {index === decadeItem.videos.length - 1 && (
                                        <tr>
                                            <td className={styles.status}>
                                                <input type="hidden" value={decadeItem.decade} data-field="decade"/>
                                            </td>
                                            <td><input type="text" className="form-control" placeholder="enter ID" data-field="video_id"/></td>
                                            <td><input type="text" className="form-control" placeholder="enter description" data-field="description"/></td>
                                            <td className={styles.delete}>
                                                <button className="bg-transparent text-white border-0" onClick={handleAdd}>
                                                    <FaPlus />
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </div>
    );
}
