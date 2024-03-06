import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className='text-center py-2 bg-primary text-white'>
            <Container>
                <Row>
                    <Col md={6} lg={6}><p>Recetas Bonapettit<br /> <i class="bi bi-map"></i>123 Calle Principal, Ciudad</p></Col>
                    <Col md={6} lg={6}><p>Síguenos en redes:<br /><i class="bi bi-instagram"></i> @recetasbonapettit<br /><i class="bi bi-facebook"></i> Recetas Bonapettit</p></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
