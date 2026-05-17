
import type { Dictionary, GalleryImages } from '../../../types.g';
import type ThumbnailProps from './types';


import { createClassList } from '../../../utils';

import css from './Thumbnail.module.scss';

export default function Thumbnail({ link, title, name, labels, children }: ThumbnailProps) {
    const Element = link ? 'a' : 'div';

    if (link) {
        return (
            <a href={link} className={css['thumbnail']} title={title} target="_blank">
                {children}
                <div className={css['thumbnail__inner']}>
                    <h3 className={css['thumbnail__title']}>{name}</h3>
                    {labels?.length ? (
                        <div className="thumbnail__labels-wrapper">
                            {labels.map((label) => <span className={css['thumbnail__label']}>{label}</span>)}
                        </div>
                    ) : null}
                </div>
            </a>
        );
    }

    return (
        <Element className={css['thumbnail']} title={title}>
            {children}
        </Element>
    );
}