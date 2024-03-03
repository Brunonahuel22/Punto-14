import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
       <footer className='text-center  py-2 bg-primary text-white'>
       <Container>
        <Row  >
            <Col md={6} lg={6} ><p>Hola mundo</p></Col>
            <Col md={6} lg={6} ><p>Hola mundo</p></Col>
        </Row>
       </Container>
       </footer>
    );
};

export default Footer;