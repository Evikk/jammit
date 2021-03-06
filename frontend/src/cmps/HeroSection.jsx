import ScrollTo from "react-scroll-into-view";
import recordlogo from "../assets/img/recordlogo.png"
// import { Link } from "react-router-dom"
export function HeroSection() {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-content">
                    <div className="logo">
                        <img src={recordlogo} alt="logo"/>
                    </div>
                        <div className="hero-title">
                            <p>Make Music.</p> 
                            <p>Make Friends.</p> 
                    </div>
                    {/* <div className="call-to-action">
                        <button><Link to="/jams">Let's Find A Jam</Link></button>
                    </div> */}

                </div>
                <div className="hero__image">
                {/* <div className="hero__image--overlay"></div> */}
                    <ScrollTo selector={'.main-content'} smooth={true}>
                        <svg className="arrows">
                            <path className="a1" d="M0 0 L30 32 L60 0"></path>
                            <path className="a2" d="M0 20 L30 52 L60 20"></path>
                            <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </ScrollTo>
                </div>
            </div>
        </div>
    );
}
