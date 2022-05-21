import * as React from "react";
import BuildingImage from "../../assets/images/building.png";

const About = () => {

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-5">
                        <div className="about__image">
                            <img
                                className="about__image__inner"
                                src={BuildingImage}
                                alt="About Building"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-md-offset-1">
                        <div className="about__content">
                            <h2 className="about__content__title">
                                Award winning real estate company in Dubai
                            </h2>
                            <p className="about__content__desc">
                                Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.
                            </p>
                            <div className="about__content__footer">
                                <div className="about__content__footer__item">
                                    <h4 className="about__content__footer__item__title">
                                        Previous projects
                                    </h4>
                                    <div className="about__content__footer__item__desc">
                                        34+
                                    </div>
                                </div>
                                <div className="about__content__footer__item">
                                    <h4 className="about__content__footer__item__title">
                                        years experience
                                    </h4>
                                    <div className="about__content__footer__item__desc">
                                        20y
                                    </div>
                                </div>
                                <div className="about__content__footer__item">
                                    <h4 className="about__content__footer__item__title">
                                        Ongoing projects
                                    </h4>
                                    <div className="about__content__footer__item__desc">
                                        12
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
