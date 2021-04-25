// UI
import { createMedia } from '@artsy/fresnel'
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Grid,
    Visibility,
} from 'semantic-ui-react'
import styles from "./HomePage.module.scss"

// Modules
import ResponsiveNav from "../../modules/nav";

// Next.js
import { useState } from 'react';

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const DesktopContainer = ({ children }: { children: any }) => {

    const [fixed, setFixed] = useState(false)

    return (
        <Media greaterThan='mobile' className={styles.headerRow}>
            <Visibility
                once={false}
                onBottomPassed={() => setFixed(true)}
                onBottomPassedReverse={() => setFixed(false)}
            >
                <Segment
                    textAlign='center'
                    className={styles.headerHome}
                    vertical
                >
                    <ResponsiveNav.DesktopNav fixed={fixed}></ResponsiveNav.DesktopNav>
                    <HomepageHeading />
                </Segment>
            </Visibility>

            {children}
        </Media>
    )
}

const HomepageHeading = ({ mobile = false }: { mobile?: boolean }) => (
    <Container className={styles.homepageHeading}>
        <Grid columns={2} stackable>
            <Grid.Row className={styles.headerRow}>
                <Grid.Column className={styles.headerHomePeccunia}>
                    <div className={styles.headerHomeTitle}>
                        <Header
                            as='h1'
                            content='Potencializa y planea tu portafolio de Criptomonedas'
                        />
                    </div>
                    <Header
                        as='h3'
                        content='Estamos desarrollando herramientas para potencializar tu salud financiera.'
                        className={styles.headerHomeSubtitle}
                    />
                    <Button primary size='medium'>
                        Planear ahora <Icon name='arrow right' inverted />
                    </Button>
                </Grid.Column>
                {!mobile &&
                    <Grid.Column className={styles.headerHomeIllustration}><img src="/assets/vectors/home-header.svg" alt="Ilustración" /></Grid.Column>
                }
            </Grid.Row>
        </Grid>
    </Container>
)

const MobileContainer = ({ children }: { children: any }) => {

    const [sidebarOpened, setSidebarOpened] = useState(false)

    return (
        // @ts-ignore
        <Media as={Sidebar.Pushable} at='mobile'>
            <Sidebar.Pushable>
                <ResponsiveNav.MobileNav
                    sidebarOpened={sidebarOpened}
                    setSidebarOpened={setSidebarOpened}></ResponsiveNav.MobileNav>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu pointing secondary size='large'>
                                <Menu.Item onClick={() => setSidebarOpened(true)}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a'>
                                        Mi perfil
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    )
}

const HomePageResponsive = ({ children }: { children: any }) => (
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)
export default HomePageResponsive;