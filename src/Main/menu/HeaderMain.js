import React, { useEffect, useState } from "react";
import Breakpoint, {
    BreakpointProvider,
    setDefaultBreakpoints,
} from "react-socks";
// import { header } from "react-bootstrap";
import { Link } from "@reach/router";
import useOnclickOutside from "react-cool-onclickoutside";
// import { RandomReveal } from 'react-random-reveal';
import Rav from "../Rev.js";
import ".././../App.css";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const NavLink = (props) => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                className: isCurrent ? "active" : "non-active",
            };
        }}
    />
);

const HeaderMain = function () {



    const [hover, setHover] = React.useState(false);
    const handleHover = () => {
        setHover(!hover);
    };
    const closeHover = () => {
        setHover(false);
    };
    const refHover = useOnclickOutside(() => {
        closeHover();
    });
    // const [openMenu, setOpenMenu] = React.useState(false);
    // const [openMenu1, setOpenMenu1] = React.useState(false);
    // const [openMenu2, setOpenMenu2] = React.useState(false);
    // const [openMenu3, setOpenMenu3] = React.useState(false);
    // const [walletConnection, setwalletConnection] = React.useState(true);
    // const handleBtnClick = (): void => {
    //     setOpenMenu(!openMenu);
    // };




    // const handleBtnClick1 = (): void => {
    //   setOpenMenu1(!openMenu1);
    // };
    // const handleBtnClick2 = (): void => {
    //   setOpenMenu2(!openMenu2);
    // };
    // const handleBtnClick3 = (): void => {
    //     setOpenMenu3(!openMenu3);
    // };
    // const closeMenu = (): void => {
    //     setOpenMenu(false);
    // };

    // const closeMenu1 = (): void => {
    //   setOpenMenu1(false);
    // };
    // const closeMenu2 = (): void => {
    //     setOpenMenu2(false);
    // };
    // const closeMenu3 = (): void => {
    //     setOpenMenu3(false);
    // };
    // const ref = useOnclickOutside(() => {
    //     closeMenu();
    // });
    // const ref1 = useOnclickOutside(() => {
    //   closeMenu1();
    // });
    // const ref2 = useOnclickOutside(() => {
    //   closeMenu2();
    // });
    // const ref3 = useOnclickOutside(() => {
    //     closeMenu3();
    // });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const totop = document.getElementById("scroll-to-top");
        // const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            btn_icon(false);
            // if (window.pageYOffset > sticky) {
            // header.classList.add("sticky");
            //   totop.classList.add("show");
            // } else {
            // header.classList.remove("sticky");
            //   totop.classList.remove("show");
            // }
            // if (window.pageYOffset > sticky) {
            //   closeMenu();
            // }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    return (
        <div id="myHeader" className="navbar">
            <div className="container">
                <div className="row w-100-nav" >
                    <div className="logo px-0">
                        <div className="navbar-title navbar-item my-3">
                            <NavLink to="/">
                                <img
                                    src="./img/logo-3.png"
                                    className="img-fluid d-block"
                                    alt="#"
                                />
                                <img src="./img/logo-3.png" className="img-fluid d-3" alt="#" />
                                <img
                                    src="./img/logo-light.png"
                                    className="img-fluid d-none"
                                    alt="#"
                                />
                            </NavLink>
                        </div>
                    </div>

                    {/* <div className="search">
                        <input
                            id="quick_search"
                            className="xs-hide"
                            name="quick_search"
                            placeholder="search item here..."
                            type="text"
                        />
                    </div> */}

                    <BreakpointProvider>
                        <Breakpoint l down>
                            {showmenu && (
                                <div className="menu">
                                    <div className="navbar-item">
                                        <div ref={refHover}>
                                            <div
                                                className="dropdown-custom dropdown-toggle btn"
                                                onClick={handleHover}
                                            >
                                                <Rav data="services" />
                                            </div>
                                            {hover && (
                                                <div className="item-dropdown">
                                                    <div className="dropdown" onClick={closeHover}>
                                                        <NavLink to="/product" onClick={() => btn_icon(!showmenu)}>
                                                            <Rav data="Product" />
                                                        </NavLink>
                                                        <NavLink
                                                            to="/product"
                                                            onClick={() => btn_icon(!showmenu)}
                                                        >
                                                            <Rav data="Product 2" /> 
                                                        </NavLink>
                                                        <NavLink
                                                            to="/home2"
                                                            onClick={() => btn_icon(!showmenu)}
                                                        >
                                                            <Rav data="Product 3" />
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="navbar-item">
                                        <NavLink to="#">
                                            <Rav data="Contact" />
                                            <span className="lines"></span>
                                        </NavLink>
                                    </div>
                                    {/* <div className="navbar-item">
                                        <NavLink to="/contact">
                                            <Rav data="Contact" />
                                            <span className="lines"></span>
                                        </NavLink>
                                    </div> */}
                                    <div className="navbar-item">
                                        <NavLink to="#">
                                            <Rav data="Training" />
                                            <span className="lines"></span>
                                        </NavLink>
                                    </div>
                                    <div className="navbar-item">
                                        <NavLink to="/carrier">
                                            <Rav data="Carriers" />
                                            <span className="lines"></span>
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                        </Breakpoint>

                        <Breakpoint xl>
                            <div className="menu">
                                <div className="navbar-item">
                                    <div ref={refHover}>
                                        <div
                                            className="dropdown-custom dropdown-toggle btn"
                                            onMouseEnter={handleHover}
                                            onMouseLeave={closeHover}
                                        >
                                            <Rav data="services" />
                                            <span className="lines"></span>
                                            {hover && (
                                                <div className="item-dropdown">
                                                    <div className="dropdown" onClick={closeHover}>
                                                        <NavLink to="/product"> <Rav data="Product" /></NavLink>
                                                        <NavLink to="/home1"><Rav data="Product 2" /></NavLink>
                                                        <NavLink to="/home2"><Rav data="Product 3" /></NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="navbar-item">
                  <div ref={ref}>
                    <div
                      className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick}
                      onMouseLeave={closeMenu}
                    >
                      <Rav data = "Home" />
                      <span className="lines"></span>
                      {openMenu && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu}>
                            <NavLink to="/"><Rav data="Homepage"/></NavLink>
                            <NavLink to="/home1"><Rav data="Homepage 1"/></NavLink>
                            <NavLink to="/home2"><Rav data="Homepage 2"/></NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
                                {/* <div
                  className="navbar-item"
                  onClick={() => btn_icon(!showmenu)}
                >
                  <NavLink to="/explore">
                  <Rav data="Explore"/>
                    <span className="lines"></span>
                  </NavLink>
                </div> */}
                                {/* <div
                  className="navbar-item"
                  onClick={() => btn_icon(!showmenu)}
                >
                  <NavLink to="/author">
                  <Rav data="My NFT's"/>
                    <span className="lines"></span>
                  </NavLink>
                </div> */}
                                {/* <div className="navbar-item">
                  <NavLink to="/product">
                  <Rav data="Activity"/>
                    <span className="lines"></span>
                  </NavLink>
                </div> */}
                                <div className="navbar-item">
                                    <NavLink to="/carrier">
                                        <Rav data="Carriers" />
                                        <span className="lines"></span>
                                    </NavLink>
                                </div>
                                <div className="navbar-item">
                                    <NavLink to="/training">
                                        <Rav data="Training" />
                                        <span className="lines"></span>
                                    </NavLink>
                                </div>
                                {/* <div className="navbar-item">
                                    <NavLink to="/contact">
                                        <Rav data="Contact" />
                                        <span className="lines"></span>
                                    </NavLink>
                                </div> */}
                                <div className="navbar-item">
                                    <NavLink to="/contact">
                                        <Rav data="Contact" />
                                        <span className="lines"></span>
                                    </NavLink>
                                </div>
                                {/* <div className="navbar-item">
                  <div ref={ref3}>
                    <div
                      className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick3}
                      onMouseLeave={closeMenu3}
                    >
                      <Rav data="Elements"/>
                      <span className="lines"></span>
                      {openMenu3 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/elegantIcons"><Rav data = "Elegant Icon"/></NavLink>
                            <NavLink to="/etlineIcons"><Rav data= 'Etline Icon'/></NavLink>
                            <NavLink to="/fontAwesomeIcons">
                              
                              <Rav data="Font Awesome Icon"/>
                            </NavLink>
                            <NavLink to="/accordion"><Rav data="Accordion"/></NavLink>
                            <NavLink to="/alerts"> <Rav data="Alerts"/></NavLink>
                            <NavLink to="/price"> <Rav data="Pricing Table"/></NavLink>
                            <NavLink to="/progressbar"> <Rav data="Progess Bar"/></NavLink>
                            <NavLink to="/tabs"><Rav data="Tabs"/></NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
                            </div>
                        </Breakpoint>
                    </BreakpointProvider>

                    {/* <div className="mainside">
            {walletConnection && (
              <NavLink to="/loginTwo" className="btn-main">
                Log In
              </NavLink>
            )}

            {!walletConnection && (
              <NavLink to="/loginTwo" className="btn-main">
                User Not Found
              </NavLink>
            )}
          </div> */}
                </div>

                <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
                    <div className="menu-line white"></div>
                    <div className="menu-line1 white"></div>
                    <div className="menu-line2 white"></div>
                </button>
            </div>
        </div>
    );
};
export default HeaderMain;
