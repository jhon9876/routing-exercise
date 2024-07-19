import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const position = useNavigate();
  const URLImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUDnoc1bTKzLuY-_gZIMq6G-w7SQpV3HxfA&s";
  return (
    <>
      <Container fluid>
        <Row className="m-4">
          <Col>
            <h1>Esplora i posti più belli dell'Italia</h1>
            <p>
              Questo è un semplice esempio di un jumbotron per attirare
              l'attenzione su contenuti speciali o informazioni.
            </p>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          <Col>
            <p className="p-5 fs-4">
              A lato vengono mostrati alcuni esempi di località suggestive in
              Italia:
            </p>
            <p>
              <Button onClick={() => position("/about")} variant="primary">
                Scopri di più
              </Button>
            </p>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image className="w-100" src={URLImage}></Image>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="w-100" src={URLImage}></Image>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="w-100" src={URLImage}></Image>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
