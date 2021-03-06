// Modules
import Footer from "../../modules/footer"
import TopCryptosBy from "../../modules/cryptos"

// UI
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Segment
} from 'semantic-ui-react'

import "./HomePage.module.scss"

import ResponsiveContainer from "./HomePage";

const HomePage = () => {

    return (
        <ResponsiveContainer>
            <Segment style={{ padding: '1.5em 10%' }} vertical inverted>
                <TopCryptosBy />
            </Segment>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "What a Company"
            </Header>
                            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "I shouldn't have gone with their competitor."
            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Breaking The Grid, Grabs Your Attention
        </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Instead of focusing on content creation and hard work, we have learned how to master the
                        art of doing nothing by providing massive amounts of whitespace and generic content that
                        can seem massive, monolithic and worth your attention.
        </p>
                    <Button as='a' size='large'>
                        Read More
        </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Did We Tell You About Our Bananas?
        </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                        it's really true. It took years of gene splicing and combinatory DNA research, but our
                        bananas can really dance.
        </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
        </Button>
                </Container>
            </Segment>

            <Footer></Footer>
        </ResponsiveContainer>
    )
}

export default HomePage;
