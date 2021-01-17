export function HeroSection() {
    return (
        <div class="container">
            <div class="hero">
                <div class="hero__image">
                <div class="hero__image--overlay"></div>
                    <p class="hero-title">Make Music. Make Friends.</p>
                    {/* <p class="hero-subtitle">Search and explore the best jam sessions around!</p> */}
                    <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
