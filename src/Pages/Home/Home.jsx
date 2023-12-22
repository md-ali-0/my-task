import { useEffect } from "react";
import Container from "../../components/Container";
import Banner from "./Banner";
import Features from "./Features";
import TargetAudience from "./TargetAudience";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        // Main
        <main>
            <Container>
                <Banner />
                <Features/>
                <TargetAudience/>
            </Container>
        </main>
    );
};

export default Home;
