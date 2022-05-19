import UserDetails from "../components/UserDetails"

const Details = (props) => {
    const {name, sex} = props.users
    return(
        <div className='details'>
            <h1>hola si es aqui {name}</h1> 
            <span>hola{sex}</span>
        </div>
    )
}

export default Details