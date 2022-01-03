import { Carousel } from 'react-carousel-minimal';
import { CarouselData } from './CarouselData';
import Fade from "react-reveal";


const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
function ProjectCarousel() {
    
    return (
        <section id="resume">
            <Fade left duration={1000} distance="40px">
                <div style={{
                    padding: "0 20px"
                }}>
                    
                    <Carousel
                    data={CarouselData}
                    time={2000}
                    
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={false}
                    // slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="75px"
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "0px",
                    }}
                    />
                </div>
            </Fade>
        </section>
        
    )
}

export default ProjectCarousel;