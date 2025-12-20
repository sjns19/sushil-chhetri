import { Section, Text } from '../../Layout';

export default function Home() {
    return (
        <Section id="home" variant="dark" hasRevealed>
            <Section.Content>
                <Text element="h1" weight="light" color="grey-300" size="lg">
                    Photographer<br />Cinematographer<br />Content Creator
                </Text>
            </Section.Content>
        </Section>
    )
}