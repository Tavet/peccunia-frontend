// UI
import { Container, Header, Segment, List } from 'semantic-ui-react'
import styles from "./Maintenance.module.scss"

const Maintenance = () => {

    return (<Container fluid className={styles['maintenance-container']}>
        <Segment inverted>
            <Header as='h1' inverted>Peccunia.</Header>
            <p style={{color: "#FAFAFA"}}>Estamos trabajando en una herramienta para brindarte los mejores datos de <b style={{ color: "#FAFAFA" }}>Criptomonedas</b><br />
            Nuestro propósito es crear la herramienta #1 para que encuentres lo más relevante de las monedas digitales.<br /></p>
            <br/>
            <br/>
            <List divided relaxed inverted>
                <List.Item>
                    <List.Icon name='pencil alternate' size='large' verticalAlign='middle' inverted />
                    <List.Content>
                        <List.Header>Noticias más relevantes</List.Header>
                        <List.Description>En progreso</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='pencil alternate' size='large' verticalAlign='middle' inverted />
                    <List.Content>
                        <List.Header>Información individual por cryptocurrency</List.Header>
                        <List.Description>En progreso</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='pencil alternate' size='large' verticalAlign='middle' inverted />
                    <List.Content>
                        <List.Header>Listado de criptomonedas</List.Header>
                        <List.Description>En progreso</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='pencil alternate' size='large' verticalAlign='middle' inverted />
                    <List.Content>
                        <List.Header>Página de bienvenida</List.Header>
                        <List.Description>En progreso</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Segment>
    </Container>)
}

export default Maintenance;