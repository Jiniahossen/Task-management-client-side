import Banner from "./Shared/Banner";
import { Helmet } from 'react-helmet-async';
import Company from "./Shared/Company";
import Partner from "./Shared/Partner";
import Benefit from "./Shared/Benefit";
import Peoples from "./Shared/Peoples";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TeamWork | Home</title>
            </Helmet>
            <Banner></Banner>
            <Company></Company>
            <Partner></Partner>
            <Peoples></Peoples>
            <Benefit></Benefit>
        </div>
    );
};

export default Home;