
import { Section, Button, Text } from '../../Layout';

export default function NotFound() {
    return (
        <Section>
            <Section.Content data-already-visible="true">
                <Text element="h1" size="xl" weight="light">404</Text>
                <Text color="grey-300">Sorry, the link you followed may be broken or the page doesn&apos;t exist.</Text>
                <Button
                    className="mt-2"
                    link="/"
                    title="Go back to the home page"
                    variant="primary"
                    size="md"
                >Back to Home</Button>
            </Section.Content>
        </Section>
    );
}