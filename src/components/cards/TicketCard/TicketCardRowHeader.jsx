import { Flex, HStack, Spacer } from "@chakra-ui/react"
const TicketCardRowHeader = () => {
  return (
    <div className="ticket-card__row_header">
      <Flex>
        <h4>Members</h4>
        <Spacer />
        <HStack gap={6}>
          <h4>Flight</h4>
          <h4>Total Members</h4>
          <h4>Ticket Price</h4>
        </HStack>
      </Flex>

    </div>
  )
}

export default TicketCardRowHeader