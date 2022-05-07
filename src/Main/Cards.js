import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Tilt from "react-parallax-tilt";

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

const Cards = () => (
  <div className="row">
      <div className="col-lg-4 col-md-6 mb-3">
      <Tilt>
        <div className="feature-box f-boxed style-3">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={0}
            duration={600}
            triggerOnce
          >
            <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
          </Reveal>
          <div className="text">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={100}
              duration={600}
              triggerOnce
            >
              <h4 className="">Add your NFT's</h4>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={600}
              triggerOnce
            >
              <p className="">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium doloremque laudantium, totam rem.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium doloremque laudantium, totam rem.
              </p>
              <br/>
              <br/>
              <br/>
              <br/>
              {/* <br/> */}
            </Reveal>
          </div>
          <i className="wm icon_cloud-upload_alt"></i>
        </div>
      </Tilt>
    </div>  <div className="col-lg-4 col-md-6 mb-3">
      <Tilt>
        <div className="feature-box f-boxed style-3">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={0}
            duration={600}
            triggerOnce
          >
            <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
          </Reveal>
          <div className="text">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={100}
              duration={600}
              triggerOnce
            >
              <h4 className="">Add your NFT's</h4>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={600}
              triggerOnce
            >
              <p className="">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium doloremque laudantium, totam rem.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium doloremque laudantium, totam rem.
              </p>
              <br/>
              <br/>
              <br/>
              <br/>
              {/* <br/> */}
            </Reveal>
          </div>
          <i className="wm icon_cloud-upload_alt"></i>
        </div>
      </Tilt>
    </div>  <div className="col-lg-4 col-md-6 mb-3">
      <Tilt>
        <div className="feature-box f-boxed style-3">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={0}
            duration={600}
            triggerOnce
          >
            <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
          </Reveal>
          <div className="text">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={100}
              duration={600}
              triggerOnce
            >
              <h4 className="">Add your NFT's</h4>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={600}
              triggerOnce
            >
              <p className="">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium doloremque laudantium, totam rem.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium doloremque laudantium, totam rem.
              </p>
              <br/>
              <br/>
              <br/>
              <br/>
              {/* <br/> */}
            </Reveal>
          </div>
          <i className="wm icon_cloud-upload_alt"></i>
        </div>
      </Tilt>
    </div>
  
  </div>
);
export default Cards;
