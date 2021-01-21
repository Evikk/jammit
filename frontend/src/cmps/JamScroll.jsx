import Slider from "react-slick";
import { JamPreview } from "./JamPreview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function JamScroll({ jams }) {
    if (!jams) return <h2>Loading...</h2>
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1680,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    
    return (
        <Slider {...settings}>
            {jams.map((jam) => (
                <JamPreview
                    key={jam._id}
                    jam={jam}
                />
            ))}
        </Slider>
    );
}
