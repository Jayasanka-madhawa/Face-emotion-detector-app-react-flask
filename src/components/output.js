import Button from 'react-bootstrap/esm/Button';

import Image from 'react-bootstrap/Image'
import { Container, Row, Col,Badge } from 'react-bootstrap'


function Coutput(props) {

    return (
        <div>
            <br />
            <h2>{"You are Looking "}</h2><h1> <Badge variant="success">{props.data}</Badge> </h1>
            <br />

            <Container >
                <br />
                <Image src='http://127.0.0.1:5000/static/after.jpg' roundedCircle width='600px' height='600px' />
                <br/>
                <br />
                <br />
                <div>
                    <Button href="/home">Back </Button>
                </div>
            </Container>
            

        </div>

    )
}
export default Coutput