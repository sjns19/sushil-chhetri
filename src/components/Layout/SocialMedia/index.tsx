import type { SocialMediaProps } from './types';

import css from './SocialMedia.module.scss';
import socialMediaLinks from '../../../static/social-media.json';

import {
    InstagramIcon,
    YouTubeIcon,
    EmailIcon,
    MobileIcon
} from '../../Icons';

export default function SocialMedia({ }: SocialMediaProps) {
    const icons = {
        Email: <EmailIcon size={18} />,
        Instagram: <InstagramIcon size={18} />,
        YouTube: <YouTubeIcon size={18} />,
        Phone: <MobileIcon size={18} />
    };

    return (
        <ul className={css['social-list']}>
            {socialMediaLinks.map(({ name, link, title }, idx) => {
                return (
                    <li key={idx} className={css['social-list-item']}>
                        <a
                            className={css['social-list-link']}
                            title={title}
                            href={link}
                        >
                            {icons[name as keyof typeof icons]}
                            <span>{name}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}