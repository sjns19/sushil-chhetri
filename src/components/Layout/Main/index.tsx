
import type { MainProps } from './types';

import css from './Main.module.scss';

export default function Main({ children }: MainProps) {
    return (
        <main className={css['main']}>
            {children}
        </main>
    );
}
