import "../../assets/styles/pages/homePage.scss"
import { Flex, Grid, GridItem } from "@chakra-ui/react"
import Card from "../cards/Card"
import plane from "../../assets/images/plane.png"
import TicketCard from "../cards/TicketCard/TicketCard"

const Home = () => {
    const mainFlex = {
        direction: ["column", "column", "row", "row"],
        padding: ["10px 10px", "10px 10px", "35px 50px", "35px 50px"]
    }

    return (
        <div className="home-page">
            <Flex
                direction={mainFlex.direction}
                p={mainFlex.padding}
                justifyContent="start"
                gap="10"
            >
                <Card
                    backgroundColor="#C99C33"
                    img={plane}
                >
                    <h2>Boeing 787</h2>
                    <h1>$548</h1>
                </Card>
                <Card
                    img={plane}
                >
                    <h2>Airbus 811</h2>
                    <h1>$620</h1>
                </Card>
                <Card
                    className="card_last"
                >
                    <h2>Total Flights</h2>
                    <h1>850</h1>
                </Card>

            </Flex>
            <Flex
                direction={mainFlex.direction}
                p={mainFlex.padding}
                justifyContent="start"
                gap="10"
            >
                <TicketCard />
            </Flex>

        </div>
    );
}

export default Home;

