import "../../assets/styles/pages/homePage.scss"
import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react"
import Card from "../cards/Card"
import barChartImg from "../../assets/images/stats.png"
import flightShareImg from "../../assets/images/stats-share.png"
import flightScheduleImg from "../../assets/images/stats-schedule.png"
import plane from "../../assets/images/plane.png"
import TicketCard from "../cards/TicketCard/TicketCard"
import StatisticsCard from "../cards/StatisticsCard"

import DoughnutChart from "../charts/DoughnutChart"
import LineChart from "../charts/LineChart"
import BarChart from "../charts/BarChart"

const Home = () => {

    const mainFlex = {
        direction: ["column", "column", "column", "row"],
        paddingRow1: ["10px 10px 0px 10px", "10px 10px 0px 10px", "15px 50px 0px 50px", "15px 50px"],
        paddingRow2: ["0px 10px", "0px 10px", "0px 50px", "0px 50px"],
        paddingRow3: ["0px 10px", "0px 10px", "0px 50px 0px 50px", "15px 50px"]
    }

    return (
        <div className="home-page">
            <Flex
                direction={mainFlex.direction}
                p={mainFlex.paddingRow1}
                justifyContent="start"
            >
                <Box w='100%' px={3} py={3}>
                    <Card
                        backgroundColor="#C99C33"
                        img={plane}
                    >
                        <h2>Boeing 787</h2>
                        <h1>$548</h1>
                    </Card>
                </Box>
                <Box w='100%' px={3} py={3}>
                    <Card
                        img={plane}
                    >
                        <h2>Airbus 811</h2>
                        <h1>$620</h1>
                    </Card>
                </Box>
                <Box w='100%' px={3} py={3}>
                    <Card
                        className="card_last"
                    >
                        <h2>Total Flights</h2>
                        <h1>850</h1>
                    </Card>
                </Box>

            </Flex>
            <Flex
                direction={mainFlex.direction}
                p={mainFlex.paddingRow2}
                justifyContent="start"
            >
                <Box w='100%' px={3} py={3}>
                    <TicketCard />
                </Box>
                <Box w={['100%','100%','100%','50%']} px={3} py={3}>
                    <StatisticsCard>
                        <h2>
                        Statistics
                        </h2>
                        <BarChart />
                    </StatisticsCard>
                </Box>

            </Flex>
            <Flex
                direction={mainFlex.direction}
                p={mainFlex.paddingRow3}
                justifyContent="start"
            >
                <Box w={['100%','100%','100%','50%']} px={3} py={3}>
                    <StatisticsCard >
                        <h2>
                            Flight Share
                        </h2>
                        <DoughnutChart />
                    </StatisticsCard>
                </Box>
                <Box w='100%' px={3} py={3}>
                    <StatisticsCard>
                        <h2>
                            Flight Schedule
                        </h2>
                        <LineChart />
                    </StatisticsCard>
                </Box>

            </Flex>
            {/* <Flex
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
            </Flex> */}

        </div>
    );
}

export default Home;

