import Slider from "react-slick";
import { JamPreview } from "./JamPreview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "react-loader-spinner";


export function JamScroll({ jams }) {
    if (!jams) return <div className="loader main-content pos-relative">
    <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
  </div>
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1860,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
            },
            {
              breakpoint: 1530,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
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
