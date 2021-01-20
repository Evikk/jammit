import ScrollTo from "react-scroll-into-view";

export function HeroSection() {
    return (
        <div className="container">
            <div className="hero">
                    <div className="hero-title">
                        <p>Make Music.</p> 
                        <p>Make Friends.</p> 
                        </div>
                <div className="hero__image">
                {/* <div className="hero__image--overlay"></div> */}
                    {/* <p className="hero-subtitle">Search and explore the best jam sessions around!</p> */}
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
