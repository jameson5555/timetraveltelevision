'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '@/app/components/menu.module.css';
import globalConfig from '@/app/app.config';

const decades = globalConfig.decades;

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
                        <Link className={styles.link} href={`/${decade}`}>{decade}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
