import { Avatar } from '@chakra-ui/react'
import { Flex, HStack, Spacer, Box } from "@chakra-ui/react"

const TicketCardRow = (props) => {
  return (
    <>
      <div className="ticket-card__row_divider_left"></div>
      <div className="ticket-card__row_divider_right"></div>
      <div
        className="ticket-card__row"
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
          <Spacer />
          <HStack gap="85px" align="center">
            <Box>
              <h4>Quatar</h4>
            </Box>
            <Flex className='ticket-card__row_count' justify="center" align="center">
              <h4>5</h4>
            </Flex>
            <Box>
              <h4>$56k</h4>
            </Box>
          </HStack>
        </Flex>
      </div>
    </>

  )
}

export default TicketCardRow