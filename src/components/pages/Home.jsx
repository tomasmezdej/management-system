import "../../assets/styles/pages/homePage.scss"
import { Flex, Grid, GridItem } from "@chakra-ui/react"
import Card from "../global/Card"

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
                gap="10"
            >
                <Flex direction="column" w="100%" >
                    <Card backgroundColor="#C99C33">
                        <h2>Boeing 787</h2>
                        <h1>$548</h1>
                    </Card>
                </Flex>
                <Flex direction="column" w="100%">
                    <Card>
                        <h2>Aitbus 811</h2>
                        <h1>$620</h1>
                    </Card>

                </Flex>
                <Flex direction="column" w="100%">
                    <Card>
                        <h2>Total Flights</h2>
                        <h1>850</h1>
                    </Card>

                </Flex>
            </Flex>
        </div>
    );
}

export default Home;

