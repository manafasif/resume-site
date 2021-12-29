import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import background from "../../src/media/header.jpg";
import Nav from "./Nav";

const HEADER_COLOR = "rgb(0, 5, 36)";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const siteName = this.props.data.sitename;
    const description = this.props.data.description;

    let config = {
      body: "../../src/media/header.jpg"
    };

    return (
      <>
        <header id="home" style={{ 
          backgroundImage: `url(${background})`, 
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}>
          {/* <ParticlesBg type="cobweb" config={config} bg={true} /> */}
          <Nav />
          
          {/* <div > */}
            <div className="row banner" >
              <div className="banner-text">
                <Fade bottom>
                  <h1 className="responsive-headline" style={{textShadow: true, color: HEADER_COLOR}}>{siteName}</h1>
                </Fade>
                <Fade bottom duration={1200}>
                  <h3 style={{ 
                    fontWeight: "bold",
                    textShadow: true, 
                    color: "black"}}>
                      {description}.
                      </h3>
                </Fade>
                <hr />
                <Fade bottom duration={2000}>
                  <ul className="social">
                    <a href={project} className="button btn project-btn">
                      <i className="fa fa-book"></i>Source Code
                    </a>
                    <a href={github} className="button btn github-btn">
                      <i className="fa fa-github"></i>Github
                    </a>
                  </ul>
                </Fade>
              </div>
            </div>
          {/* </div> */}
          

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
          
        </header>
        
      </>
      

    );
  }
}

export default Header;
