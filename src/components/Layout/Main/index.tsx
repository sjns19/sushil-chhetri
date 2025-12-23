
import type { MainProps } from './types';

import { forwardRef } from 'react';
import css from './Main.module.scss';

const Main: MainProps = ({ children }, ref) => {
    return (
        <main className={css['main']} ref={ref}>
            {children}
        </main>
    );
};

export default forwardRef(Main);
