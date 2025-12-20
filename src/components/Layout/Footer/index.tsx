import css from './Footer.module.scss';

import { Text } from '../';

export default function Footer() {
    return (
        <footer className={css['footer']}>
            <Text color="grey-200" size="sm">
                I am truly grateful that you took the time to check out my work. Your comments, questions, and suggestions are more than welcome.We kindly<br />request that you respect copyright laws and refrain from using any content from this website.
            </Text>
            <Text className="mt-1" color="grey-300">&copy; 2025 Sushil Chhetri</Text>
        </footer>
    );
}