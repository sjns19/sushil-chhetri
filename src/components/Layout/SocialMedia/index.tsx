import type { SocialMediaProps } from './types';

import { FaInstagram, FaYoutube, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

import css from './SocialMedia.module.scss';
import socialMediaLinks from '../../../static/social-media.json';

export default function SocialMedia({ }: SocialMediaProps) {
    const icons = {
        Email: <FaEnvelope size={18} />,
        Instagram: <FaInstagram size={18} />,
        YouTube: <FaYoutube size={18} />,
        Phone: <FaMobileAlt size={18} />
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