import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Pages from './pages/Pages';
import Blogs from './pages/Blogs';
import ContactUs from './pages/Contact-Us';
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/datepicker.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/icofont.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/normalize.css";
import "./assets/css/owl-carousel.css";
import "./assets/css/responsive.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.css";

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/services' element={<Services />} />
      <Route path='/page' element={<Pages />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
