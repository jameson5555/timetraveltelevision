"use client";

import React from 'react';
import { DecadeListItem } from '@/app/lib/definitions';
import styles from '@/app/components/admin/decades-list.module.css';

export default function DecadesList({
    decades,
}: {
    decades: DecadeListItem[];
}) {
    return (
        <table className={`${styles.decadeslist} table`}>
            {decades.map((decadeItem) => (
                <React.Fragment key={decadeItem.decade}>
                    <thead>
                        <tr>
                            <th colSpan={2}>{decadeItem.decade} Videos</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody key={`${decadeItem.decade}-body`}>
                        {decadeItem.videos.map((video) => (
                            <tr key={video.id}>
                                <td>{video.id}</td>
                                <td>{video.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </React.Fragment>
            ))}
        </table>
    );
}
