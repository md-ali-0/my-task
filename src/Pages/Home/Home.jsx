import Container from "../../components/Container";
import Banner from "./Banner";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        // Main
        <main>
            <Container>
                <Banner />
            </Container>
        </main>
    );
};

export default Home;
