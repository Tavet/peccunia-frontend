
// UI
import { createMedia } from '@artsy/fresnel'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

// Next.js
import { useState, useEffect } from 'react';

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
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item as='a' active>
                                Home
                  </Menu.Item>
                            <Menu.Item as='a'>Work</Menu.Item>
                            <Menu.Item as='a'>Company</Menu.Item>
                            <Menu.Item as='a'>Careers</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted={!fixed}>
                                    Log in
                    </Button>
                                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                    Sign Up
                    </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
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
            content='Imagine-a-Company'
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
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge'>
            Get Started
        <Icon name='right arrow' />
        </Button>
    </Container>
)

const MobileContainer = ({ children }: { children: any }) => {

    const [sidebarOpened, setSidebarOpened] = useState(false)

    return (
        <Media as={Sidebar.Pushable} at='mobile'>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    inverted
                    onHide={() => setSidebarOpened(false)}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
              </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item as='a'>Log in</Menu.Item>
                    <Menu.Item as='a'>Sign Up</Menu.Item>
                </Sidebar>

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