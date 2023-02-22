
import { Avatar, Flex, Spacer, Box, Icon } from "@chakra-ui/react"
import {
  GiCommercialAirplane
} from "react-icons/gi"
import {
  IoPeopleCircleOutline
} from "react-icons/io5"
import {
  AiOutlineEuroCircle
} from "react-icons/ai"

const TicketCardRow = (props) => {
  return (
    <>
      <div className="ticket-card__row_divider_left"></div>
      <div className="ticket-card__row_divider_right"></div>
      <div
        className="ticket-card__row"
      >
        <Flex
          direction={["column", "column", "column", "row"]}
        >
          <Flex>
            { props.avatar || <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' /> }
            <Flex alignItems="start" direction="column" pl={4}>
              <h4>
                { props.name || "Jogn Doe" }
              </h4>
              <h4>
                { props.email || "jogn@gmail.com" }
              </h4>
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            mt={["15px", "0px", "0px", "0px"]}
            gap={["5px", "85px", "85px", "85px"]}
            align={["center", "center", "center", "center"]}
            direction={["row", "row", "row", "row"]}
            justifyContent="space-between"
          >
            <Box className='ticket-card__row_mobile_info' justify="center" align="center" gap={2}>
              <Icon
                className="icon"
                as={GiCommercialAirplane}
                boxSize={5}
                color="#DEE2E2"
              />
              <h4>Quatar</h4>
            </Box>
            {/* <Flex w="100%" justifyContent="center">
              <Flex className='ticket-card__row_count' justify="center" align="center">
                <h4>5</h4>
              </Flex>
            </Flex> */}
            <Flex className='ticket-card__row_count' justify="center" align="center" gap={2}>
              <Icon
                className="icon"
                as={IoPeopleCircleOutline}
                boxSize={5}
                color="#DEE2E2"
              />
              <h4>5</h4>
            </Flex>
            <Box className='ticket-card__row_mobile_info' justify="center" align="center" gap={2}>
              <Icon
                className="icon"
                as={AiOutlineEuroCircle}
                boxSize={5}
                color="#DEE2E2"
              />
              <h4>$56k</h4>
            </Box>
          </Flex>
        </Flex>
      </div>
    </>

  )
}

export default TicketCardRow