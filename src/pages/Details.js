import UserDetails from "../components/UserDetails"

const Details = (props) => {
    return(
        <div className='details'>
            <h1>hola si es aqui {props.name}</h1> 
            <span>{props.sex}</span>
        </div>
    )
}

export default Details