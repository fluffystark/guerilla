import * as React from "react";
import Logo from "../atoms/Logo";
import IconLocation from "../atoms/IconLocation";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <Logo className="footer__logo" />
                        <div className="footer__contact">
                            <div className="footer__contact__details">
                                <span className="footer__contact__details__text">2118 Thornridge Cir.<br/>Dubai, UAE 35624</span>
                            </div>
                            <div className="footer__contact__details">
                                <span className="footer__contact__details__text">+33 415 65356 - 9</span>
                            </div>
                            <div className="footer__contact__details">
                                <span className="footer__contact__details__text">contact@lugar.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <div className="footer__nav">
                                    <div className="footer__nav__title">Quick Links</div>
                                    <a className="footer__nav__link" href="/">Home</a>
                                    <a className="footer__nav__link" href="/">About</a>
                                    <a className="footer__nav__link" href="/">Project</a>
                                    <a className="footer__nav__link" href="/">Contact</a>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="footer__nav">
                                    <div className="footer__nav__title">Legal Links</div>
                                    <a className="footer__nav__link" href="/">Terms</a>
                                    <a className="footer__nav__link" href="/">Conditions</a>
                                    <a className="footer__nav__link" href="/">Policy</a>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="footer__nav">
                                    <div className="footer__nav__title">Social Media</div>
                                    <a className="footer__nav__link" href="/">Facebook</a>
                                    <a className="footer__nav__link" href="/">Twitter</a>
                                    <a className="footer__nav__link" href="/">Youtube</a>
                                    <a className="footer__nav__link" href="/">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="footer__copyright">Copyright @ 2022 Lugar Inc.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
