import * as React from "react";
import HouseImage from "../../assets/images/house.png";

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__image">
                <img
                    className="hero__image__inner"
                    src={HouseImage}
                    alt="About Building"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="hero__content">
                            <h1 className="hero__content__title">
                                A home is built with love and dreams
                            </h1>
                            <p className="hero__content__desc">
                                Real estate farm that makes your dreams true
                            </p>
                            <div className="hero__content__footer">
                                <button
                                    aria-label="Our Projects"
                                    className="hero__content__footer__cta button"
                                >
                                    Our projects
                                </button>
                                <button
                                    aria-label="Contact us"
                                    className="hero__content__footer__cta button button--outline"
                                >
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
