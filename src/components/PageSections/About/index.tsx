import { Section, Image, Text, Button } from '../../Layout';

export default function About() {
    const scrollToWorks = () => {
        window.scrollTo({
            top: document.getElementById('works')?.offsetTop
        })
    };

    return (
        <Section id="about">
            <Section.Content>
                <Image
                    wrapperElement="figure"
                    src="/images/sushil-chhetri.png?1"
                    fit="cover"
                    alt="Sushil Chhetri"
                />
            </Section.Content>
            <Section.Content>
                <Text element="h2" size="xl" weight="light" color="accent">Namaste !</Text>
                <Text className="pt-2" color="grey-500">
                    I am Sushil Chhetri, and my photographic journey began as a landscape photographer in 1998. I later expanded my craft into fashion and advertising photography in 2003, followed by an exciting transition into cinematography in 2018.
                </Text>
                <Text className="pt-2" color="grey-500">
                    Today, I am actively involved in content creation, photography, videography, photo and video editing, and direction.
                    You are warmly welcome to collaborate, associate, or work with me in any of these creative fields.
                </Text>
                {/*<div className="py-2">
                                <Text element="h3" className="mb-1">Achievements</Text>
                                <Text className="ml-1 mb-1" size="sm">Winner- Best Commercial Advertising Photography for 'Love Birds' ice cream (AAN Award)</Text>
                                <Text className="ml-1 mb-1" size="sm">Nominated as best cinematographer for Laxmi Steels TVC (AAN Award)</Text>
                                <Text className="ml-1 mb-1" size="sm">Cinematographer & Script writer in Nepali feature film 'Timi Sanga' featuring Nazir Husen, Samragyee RLS, Aakash shrestha directed by Shishir SJB Rana.</Text>
                                <Text className="ml-1 mb-1" size="sm">Winner- Best Script for 'Timi Sanga' (LG Cine Award)</Text>
                            </div>*/}
                <Button
                    variant="primary"
                    size="xl"
                    className="mt-3"
                    title="See my work"
                    onClick={scrollToWorks}
                >See my work</Button>
            </Section.Content>
        </Section>
    );
}