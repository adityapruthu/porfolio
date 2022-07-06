import { useMantineTheme, Text, Container, Anchor, RingProgress, Grid, MediaQuery } from '@mantine/core';

const About = () => {
    const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>
                <Grid justify="center" align="center">

                    <Grid.Col sm={8} md={9} lg={7}>
                        <div style={{ marginBottom: 25 }}>
                            <Text color={theme.colors.blue[7]}>
                                <MediaQuery
                                    query="(max-width: 1200px)"
                                    styles={{ fontSize: '3.5rem !important' }}
                                >
                                    <h1 className="title">Software Craftmenship</h1>
                                </MediaQuery>
                            </Text>
                        </div>
                        <div style={{ marginBottom: 25 }}>
                            <Text size="xl" color="black">
                                    Contact me for a quick and robust backend system API driven implementation!
                            </Text>
                        </div>
                    </Grid.Col>

                    <Grid.Col sm={4} md={3} lg={2} className="center-mobile">
                        <RingProgress
                            size={240}
                            thickness={12}
                            roundCaps
                            sections={[
                                { value: 40, color: 'cyan' },
                                { value: 15, color: 'indigo' },
                                { value: 15, color: 'blue' },
                            ]}
                        />
                    </Grid.Col>

                </Grid>
            </Container>

        </section>
    );
};

export default About;
