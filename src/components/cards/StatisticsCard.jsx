import "../../assets/styles/cards/statisticsCard.scss"


const StatisticsCard = (props) => {
  const bg = props.bg || "white"
  return (
    <div className="statistics-card" style={{backgroundColor: bg}}>
      <div className="statistics-card__content">
        { props.children }
      </div>
    </div>
  )
}

export default StatisticsCard