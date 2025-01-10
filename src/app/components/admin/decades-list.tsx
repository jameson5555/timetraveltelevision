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
        <div className="table-responsive">
            <table className={`${styles.decadeslist} table table-dark table-hover`}>
                {decades.map((decadeItem) => (
                    <React.Fragment key={decadeItem.decade}>
                        <thead>
                            <tr>
                                <th className="bg-transparent pt-4" colSpan={3}>{decadeItem.decade} Videos</th>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <th>ID</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody key={`${decadeItem.decade}-body`}>
                            {decadeItem.videos.map((video) => (
                                <tr key={video.id}>
                                    <td className="status"></td>
                                    <td>{video.id}</td>
                                    <td>{video.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </div>
    );
}
