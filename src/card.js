import classes from "./card.module.css"
function Card(props) {
    return (
        <div className={`${classes.countryCard}`}>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    )
}
export default Card