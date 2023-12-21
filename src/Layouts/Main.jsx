import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Container/Container";


const Main = () => {
    return (
        <Container>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </Container>
    );
};

export default Main;