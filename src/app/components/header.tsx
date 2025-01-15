'use client';

import Link from 'next/link';
import styles from '@/app/components/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}><Link className={styles.link} href={`/`}>Time Travel Television</Link></h1>
        </header>
    );
};
