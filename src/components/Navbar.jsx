const Navbar = () => {
    return(
        <>
            <header className="header" >
                {/* <!-- Topbar --> */}
                <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-12">
                        {/* <!-- Contact --> */}
                        <ul className="top-link">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Doctors</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                        {/* <!-- End Contact --> */}
                    </div>
                    <div className="col-lg-6 col-md-7 col-12">
                        {/* <!-- Top Contact --> */}
                        <ul className="top-contact">
                            <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                            <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                        </ul>
                        {/* <!-- End Top Contact --> */}
                    </div>
                </div>
            </div>
                </div>
                {/* <!-- End Topbar --> */}
                {/* <!-- Header Inner --> */}
                <div className="header-inner">
            <div className="container">
                <div className="inner">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            {/* <!-- Start Logo --> */}
                            <div className="logo">
                                <a href="/"><img src="src\assets\img\logo.png" alt="logo" /></a>
                            </div>
                            {/* <!-- End Logo --> */}
                            {/* <!-- Mobile Nav --> */}
                            <div className="mobile-nav"></div>
                            {/* <!-- End Mobile Nav --> */}
                        </div>
                        <div className="col-lg-7 col-md-9 col-12">
                            {/* <!-- Main Menu --> */}
                            <div className="main-menu">
                                <nav className="navigation">
                                    <ul className="nav menu">
                                        <li className="active"><a href="#">Home <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown">
                                                <li><a href="/">Home Page 1</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Doctos </a></li>
                                        <li><a href="/services">Services </a></li>
                                        <li><a href="#">Pages <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown">
                                                <li><a href="/page">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Blogs <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown">
                                                <li><a href="/blogs">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!--/ End Main Menu --> */}
                        </div>
                        <div className="col-lg-2 col-12">
                            <div className="get-quote">
                                <a href="/page" className="btn">Book Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                {/* <!--/ End Header Inner --> */}
            </header>
        </>
       
    );
};

export default Navbar;