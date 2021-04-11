// UI
import {
    Button,
    Container,
    Menu,
    Sidebar,
} from 'semantic-ui-react'

const DesktopNav = ({ fixed }: { fixed: boolean }) => {
    return (
        <Menu
            fixed={fixed ? 'top' : undefined}
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
    )
}

const MobileNav = ({ sidebarOpened, setSidebarOpened }: { sidebarOpened: boolean, setSidebarOpened: (value: boolean) => void }) => {
    return (
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
    )
}

export default { MobileNav, DesktopNav }