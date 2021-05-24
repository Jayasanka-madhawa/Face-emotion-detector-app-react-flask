
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route } from 'react-router-dom';
import Cinput from './components/input';
import Coutput from './components/output';
import { Badge, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <br />
      <div className='container' >
        <br /><br /><br />
        <Row>
          <Col></Col>
          <Col xs={5}>
          <h1>
            Welcome <Badge variant="secondary">Face emotion detector</Badge>
          </h1></Col>
          <Col></Col>

        </Row>
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col md="auto">
            <BrowserRouter>
              <Route path="/home">
                <Cinput />
              </Route>
            </BrowserRouter></Col>
          <Col></Col>
        </Row>


      </div>


    </div>
  );
}

export default App;
