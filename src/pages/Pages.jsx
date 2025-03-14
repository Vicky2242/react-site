import ErrorPage from "../components/ErrorPage"
import Navbar from "../components/Navbar"
// import Preloader from "../components/Preloader"
import ProFeatures from "../components/ProFeatures"
import Footer from "../components/Footer"

const Page = () => {
    return(
        <>
        {/* <Preloader /> */}
        <ProFeatures />
        <Navbar />
        <ErrorPage />
        <Footer />
        </>
    );
};

export default Page;