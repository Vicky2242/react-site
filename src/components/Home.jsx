import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";
import Schedule from "./Schedule";
import Feature from "./Feature-Section";
import Funfacts from "./Fun-Facts";
import Whychoose from "./Why-Choose";
import CallAction from "./Call-Action";
import Portfolio from "./Portfolio";
import PricingTable from "./Pricing-Table";
import Client from "./Client";
import Appointment from "./Appointment";
// import Preloader from "./Preloader";
import ProFeatures from "./ProFeatures";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <>
            {/* <Preloader /> */}
            <ProFeatures />
            <Navbar />
            <Slider />
            <Schedule />
            <Feature />
            <Funfacts />
            <Whychoose />
            <CallAction />
            <Portfolio />
            <PricingTable />
            <Client />
            <Appointment />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;
