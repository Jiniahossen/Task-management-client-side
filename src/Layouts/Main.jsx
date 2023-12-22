import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
// Import AOS and its styles
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const Main = () => {
    return (
        <div>
                <Container>
                    <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                    </div>
                </Container>
                <Footer></Footer>
          
        </div>
    );
};

export default Main;