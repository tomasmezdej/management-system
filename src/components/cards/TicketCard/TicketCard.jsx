import "../../../assets/styles/cards/ticketCard.scss"
import TicketCardRow from "./TicketCardRow"
import TicketCardRowHeader from "./TicketCardRowHeader"

const TicketCard = (props) => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__content">
        <h2>
          Last Trips
        </h2>
        <small>
          Overview of latest month
        </small>
      </div>
      <TicketCardRowHeader />
      <TicketCardRow />
      <TicketCardRow />
    </div>
  )
}

export default TicketCard