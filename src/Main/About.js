import React from "react";
// import Footer from '../components/componentsfooter';
import { createGlobalStyle } from "styled-components";

import Reveal from "react-awesome-reveal";

// import SliderCarousel from "../components/components/SliderCarousel";

import { keyframes } from "styled-components";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const About = () => (
  <>
    <GlobalStyles />

    <section
      className="jumbotron no-bg hero"
      // style={{
      //   backgroundImage: `url(${"./img/background/code3.jpg"})`,
      // }}
    >
      <div className="container hero">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="spacer-single"></div>
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                        <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
                    </Reveal> */}
            <div className="spacer-10"></div>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <h1>1.Quality</h1>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={600}
              duration={600}
              triggerOnce
            >
              <p className=" lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it" 
              </p>
            </Reveal>
            <div className="spacer-10"></div>
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                        <span onClick={() => window.open("/#", "_self")} className="btn-main lead">Explore</span>
                        <div className="mb-sm-30"></div>
                    </Reveal> */}
            {/* <div className="spacer-double"></div> */}
          </div>
          <div className="col-lg-6 px-0">
            <img className="homeimg" src="/img/gallery/1.jpg" alt="1" width="600" height="400" />
          </div>
        </div>
      </div>
    </section>

    <section
      className="jumbotron no-bg hero"
      // style={{
      //   backgroundImage: `url(${"./img/background/code3.jpg"})`,
      // }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className="homeimg" src="/img/gallery/2.jpg" alt="1" width="500" height="400" />
          </div>
          <div className="col-lg-6">
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                        <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
                    </Reveal> */}
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <h1 className="">2.Maintenance</h1>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={600}
              duration={600}
              triggerOnce
            >
              <p className=" lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it" 
              </p>
            </Reveal>
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                        <span onClick={() => window.open("/#", "_self")} className="btn-main lead">Explore</span>
                        <div className="mb-sm-30"></div>
                    </Reveal> */}
            {/* <div className="spacer-double"></div> */}
          </div>
        </div>
      </div>
    </section>

    <section
      className="jumbotron no-bg"
      // style={{
      //   backgroundImage: `url(${"./img/background/code3.jpg"})`,
      // }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6">
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                        <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
                    </Reveal> */}
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <h1 className="">3.Scalability</h1>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={600}
              duration={600}
              triggerOnce
            >
              <p className=" lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it" 
              </p>
            </Reveal>
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                        <span onClick={() => window.open("/#", "_self")} className="btn-main lead">Explore</span>
                        <div className="mb-sm-30"></div>
                    </Reveal> */}
            {/* <div className="spacer-double"></div> */}
          </div>
          <div className="col-lg-6 px-0">
            <img className="homeimg" src="/img/gallery/3.jpg" alt="1" width="600" height="400"/>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default About;
