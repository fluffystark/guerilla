import * as React from "react";
import BuildingImage from "../../assets/images/building.png";

const About = () => {

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="about__image">
                            <img
                                className="about__image__inner"
                                src={BuildingImage}
                                alt="About Building"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-7 col-md-offset-1">
                        <div className="about__content">
                            <h2>Award winning real estate company in Dubai</h2>
                            <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                            <div>
                                <div>
                                    <div>Previous projects</div>
                                    <div>34+</div>
                                </div>
                                <div>
                                    <div>years experience</div>
                                    <div>20y</div>
                                </div>
                                <div>
                                    <div>Ongoing projects</div>
                                    <div>12</div>
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
