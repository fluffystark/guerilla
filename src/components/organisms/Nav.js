import * as React from "react";
import Logo from "../atoms/Logo";

const Nav = () => {

    return (
        <nav className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="nav__inner">
                            <Logo className="nav__logo" color="primary" />
                            <div className="nav__content">
                                <a href="/">Home</a>
                                <a href="/">About</a>
                                <a href="/">Projects</a>
                                <a href="/">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
