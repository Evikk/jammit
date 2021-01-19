import Slider from "react-slick";
import { JamPreview } from "./JamPreview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router";


export function JamScroll({ jams }) {
    const history = useHistory()
    if (!jams) return <h2>Loading...</h2>
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1680,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
