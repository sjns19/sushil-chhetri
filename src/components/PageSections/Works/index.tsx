import { Section, Text, Gallery } from '../../Layout';

export default function Works() {
    return (
        <Section id="works" isVertical>
            <Section.Content className="my-1" isSemi>
                <Text element="h2" size="xl" weight="light" color="accent" align="center">Works</Text>
                <Text align="center" className="my-3" color="grey-500">
                    Here are some glimpses of my photographic journey — from the film era to the digital age.
                    I may not be an old-school traditionalist, and I acknowledge that AI has its own space in today&apos;s creative world.
                    Yet, for me, human intelligence, intuition, and emotion remain at the heart of every image I create.
                </Text>
            </Section.Content>
            <Section.Content>
                <Gallery />
            </Section.Content>
        </Section>
    );
}