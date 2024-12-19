'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '@/app/components/menu.module.css';

const decades = ['60s', '70s', '80s', '90s'];

export default function Menu() {
    const pathname = usePathname();

    return (
        <nav className={styles.menu}>
            <ul>
                {decades.map((decade) => (
                    <li
                        key={decade}
                        className={clsx({
                            [styles.active]: pathname === '/' + decade,
                        })}
                    >
                        <Link href={`/${decade}`}>{decade}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
