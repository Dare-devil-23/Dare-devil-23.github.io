import React from 'react';
import SliderCarouselsingle from '../components/components/SliderCarouselsingle';
// import FeatureBox from '../components/components/FeatureBox';
// import CarouselCollection from '../components/components/CarouselCollection';
// import ColumnNew from '../components/components/ColumnNew';
// import AuthorList from '../components/components/authorList';
import Footer from './components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
// import HeaderSmall from '../components/menu/HeaderSmall';

import ReactRotatingText from "react-rotating-text";
import Cards from './Cards';
import About from './About';

// import Particle from '../components/components/Particle';
// import SliderMainParticle from '../components/components/SliderMainParticle';
// import { RandomReveal } from 'react-random-reveal';
import HeaderMain from './menu/HeaderMain';
// import Rev from './Rev';
import Loading from "./Loading.js";
import { Component } from 'react';
import HeaderSmall from './menu/HeaderSmall';

// import Reveal from 'react-awesome-reveal';
// import { keyframes } from "@emotion/react";

// const fadeInUp = keyframes`
//   0% {
//     opacity: 0;
//     -webkit-transform: translateY(40px);
//     transform: translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     -webkit-transform: translateY(0);
//     transform: translateY(0);
//   }
// `;
// const inline = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
//   .d-inline{
//     display: inline-block;
//    }
// `;

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

const GlobalStyles = createGlobalStyle`
  
  header#myHeader.navbar.sticky.white {
    background: #212428;
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  .jumbotron.no-bg{
    background: center bottom;
    background-size: cover;
    height: 100vh;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

export default class Home extends Component{
  constructor(){
    super()
    this.state={
      loading:true
    }
  }
  componentDidMount(){
    setInterval(()=>this.setState({loading:false}),4500)
  }
  render(){
    return(
      <>
      {!this.state.loading &&(
        <div>
          <HeaderSmall />
         {/* <Header />  */}
         <HeaderMain />
        <GlobalStyles />
        <section className="jumbotron no-bg hero-banner hero">
       {/* <Particle/> */}
       <div className='container my-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-7'>
                        <div className="spacer-single"></div>
                        {/* <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                            <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
                        </Reveal> */}
                        <div className="spacer-10"></div>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                            <h1>
                                Is it &nbsp;
                                <ReactRotatingText

                                    className="text-success font-weight-bold heroMob"
                                    style={{ 'textAlign': "left" }}
                                    items={["Digital Services", "Cyber Security", "BlockChain Technology" ,"Qantum Computing",
                                  "Medical IT","DevOps & Automation","AI & IOT" ,"Testing Services","Staffing / Recruitment"]}
                                />
                                <br />
                                
                                You are looking for ?
                            </h1>
                        </Reveal>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                            <p className=" lead">
                                Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable
                            </p>
                            {/* <Rev data="This is the Test data" /> */}
                        </Reveal>
                        <div className="spacer-10"></div>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                            <span onClick={() => window.open("/#", "_self")} className="btn-main lead">Explore</span>
                            <div className="mb-sm-30"></div>
                        </Reveal>
                        <div className="spacer-double"></div>
                    </div>
                    <div className='col-lg-5 px-0 my-5' style={{position:"relative"}}>
                        <SliderCarouselsingle />
                    </div>
                </div>
            </div>
      </section>

        <section  className = "cards hero mt-2 pt-2">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='style-2'>Our Services</h1>
                    </div>
                </div>
                <Cards />
            </div>
        </section>

        {/* <section className="container"> */}
            {/* <div className='container'> */}
            {/* <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='style-2'>Our Services</h1>
                    </div>
                </div> */}
            <About />
            {/* </div> */}
        {/* </section> */}

        {/* <section className='container no-top'>
            <div className='row'>
                <div className="spacer-double"></div>
                <div className='col-lg-12 mb-3'>
                    <h2>Create and Sell Now</h2>
                </div>
                <About />

            </div>
        </section> */}


        {/* <section className='container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='style-2'>New Items</h2>
                    </div>
                </div>
                <ColumnNew />
            </div>
        </section> */}

        {/* <section className='container no-top'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='style-2'>Hot Collections</h2>
                </div>
            </div>
            <div className='container no-top'>
                <div className='row'>
                    <div className='col-lg-12 px-0'>
                        <CarouselCollection />
                    </div>
                </div>
            </div>
        </section> */}

        {/* <section className='container no-top'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='style-2'>Top Seller</h2>
                </div>
                <div className='col-lg-12'>
                    <AuthorList />
                </div>
            </div>
        </section> */}

        {/* <section className='container no-top'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='style-2'>Create and sell</h2>
                </div>
            </div>
            <div className='container px-0'>
                <FeatureBox />
            </div> 
        </section> */}

        <Footer />

    </div>
      )}
      {
        this.state.loading &&
        <>
          <Loading />
        </>
      }
      </>
    )
  }
}