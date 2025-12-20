import { Section, Flex, Button, Text } from '../../Layout';

import { FaEnvelope } from 'react-icons/fa';
import servicesData from '../../../static/services.json';

export default function Services() {
    return (
        <Section id="services" variant="dark" isVertical>
            <Section.Content className="my-1" isSemi>
                <Text element="h2" size="xl" weight="light" color="accent-light" align="center">My Expertise</Text>
            </Section.Content>
            <Section.Content className="my-1">
                <Flex dir="column">
                    {servicesData.map((service, idx) => (
                        <Text
                            key={idx}
                            size="md"
                            weight="light"
                            color="grey-500"
                            align="center"
                        >{service}</Text>
                    ))}
                </Flex>
            </Section.Content>
            <Section.Content isSemi>
                <Text className="my-3" color="grey-300" align="center">
                    Please feel free to connect with me for any form<br />of collaboration or creative association.
                </Text>
                <Flex className="pt-2" align="center" justify="center">
                    <Button link="mailto:schhetri814@gmail.com" variant="tertiary" size="md" title="Send me an email to collaborate">
                        <Flex element="span" align="center">
                            <span className="mr-1">Send me an Email</span>
                            <FaEnvelope size={18} />
                        </Flex>
                    </Button>
                </Flex>
            </Section.Content>
        </Section>
    );
}