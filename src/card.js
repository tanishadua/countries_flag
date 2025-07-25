import "./card.css"
function Card(props) {
    return (
        <div className="cCard">
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    )
}
export default Card