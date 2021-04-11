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
    Visibility,
} from 'semantic-ui-react'

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
        <Media greaterThan='mobile'>
            <Visibility
                once={false}
                onBottomPassed={() => setFixed(true)}
                onBottomPassedReverse={() => setFixed(false)}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 700, padding: '1em 0em' }}
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
    <Container text>
        <Header
            as='h1'
            content='Peccunia'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Cryptocurrency portal en Español'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.2em' : '0.2em',
                marginBottom: '1em',
            }}
        />
        <Button primary size='huge'>
            Get Started
        <Icon name='arrow right' />
        </Button>
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
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={() => setSidebarOpened(true)}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>
                                        Log in
                      </Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
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