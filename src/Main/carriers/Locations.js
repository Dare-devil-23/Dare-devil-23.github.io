import { Component } from "react";
import * as React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  Card } from "react-bootstrap";

// import { WithStyles } from "@material-ui/core/styles";
class Locations extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div className="my-5">
        {/* <Carousel style={{height:"50vh"}}>
          <Carousel.Item style={{height:"50vh"}}>
            <img
            object-fit ="cover"
              className="d-block w-80"
              src="https://images.unsplash.com/photo-1531558506007-fe311a2f4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p style={{display:"block"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item  >
          <Carousel.Item style={{height:"50vh"}}>
            <img
            object-fit ="cover"
              className="d-block w-80"
              src="https://images.unsplash.com/photo-1515419682769-91a8a6bdaf68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"50vh"}}>
            <img
                object-fit ="cover"
              className="d-block w-80"
              src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
        >
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://st2.depositphotos.com/3895411/8345/i/950/depositphotos_83451516-stock-photo-bangalore-pinned-on-a-map.jpg"
              />
              <Card.Body>
                <Card.Title>Banglore</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://st2.depositphotos.com/3895411/8345/i/950/depositphotos_83451472-stock-photo-hyderabad-pinned-on-a-map.jpg"
              />
              <Card.Body>
                <Card.Title>Hyderabad</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.gettyimages.com/photos/map-pin-placed-in-mumbai-india-on-map-closeup-picture-id200551049-001?s=2048x2048"
              />
              <Card.Body>
                <Card.Title>Pune</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://previews.agefotostock.com/previewimage/medibigoff/6297cb4d0f1cfd1a5da4e157291d6bba/esy-034837349.jpg"
              />
              <Card.Body>
                <Card.Title>Delhi</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://thumbs.dreamstime.com/z/shallow-depth-field-focus-geographical-map-location-chennai-madras-city-tamil-nadu-india-asia-continent-atlas-183145877.jpg"
              />
              <Card.Body>
                <Card.Title>Chennai</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Locations;
