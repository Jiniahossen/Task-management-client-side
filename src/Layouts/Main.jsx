import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";



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