// UI
import {
    Button,
    Container,
    Menu,
    Sidebar,
} from 'semantic-ui-react'
import styles from "./Nav.module.scss"

const DesktopNav = ({ fixed }: { fixed: boolean }) => {
    return (
        <Menu
            fixed={fixed ? 'top' : undefined}
            inverted={fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
            className={`${!fixed ? styles.secondaryMenu : ""}`}
        >
            <Container>
                <Menu.Item as='a' active>
                    Inicio
                </Menu.Item>
                <Menu.Item as='a'>Mercado</Menu.Item>
                <Menu.Item as='a'>Noticias</Menu.Item>
                <Menu.Item position='right'>
                    <Button as='a' inverted={fixed}>
                        Mi perfil
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
            onHide={() => setSidebarOpened(false)}
            vertical
            visible={sidebarOpened}>
            <Menu.Item as='a' active>
                Inicio
            </Menu.Item>
            <Menu.Item as='a'>Mercado</Menu.Item>
            <Menu.Item as='a'>Noticias</Menu.Item>
        </Sidebar>
    )
}

export default { MobileNav, DesktopNav }