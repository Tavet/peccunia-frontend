// UI
import { Header, List } from 'semantic-ui-react'
import Meta from '../../modules/meta';
import styles from "./Maintenance.module.scss"

const Maintenance = () => {

    return (<div className={styles['maintenance-container']}>
        <Meta title="Peccunia - ¡MUY PRONTO!" />
        <Header as='h1' inverted style={{fontSize: "3em"}}>Peccunia.</Header>
        <p style={{ color: "#FAFAFA" }}>Estamos trabajando en una herramienta para brindarte los mejores datos de <b style={{ color: "#FAFAFA" }}>Criptomonedas.</b></p>
        <p style={{ color: "#FAFAFA" }}>Nuestro propósito es crear la herramienta #1 para que encuentres lo más relevante de las monedas digitales.</p>
        <br />
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
    </div>)
}

export default Maintenance;