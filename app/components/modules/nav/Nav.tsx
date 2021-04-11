import { Button, Menu } from 'semantic-ui-react'

const Nav = () => {

    return (
        <Menu>
            <Menu.Item>
                <Button primary>Sign up</Button>
            </Menu.Item>

            <Menu.Item>
                <Button>Log-in</Button>
            </Menu.Item>
        </Menu>
    );
}

export default Nav;
