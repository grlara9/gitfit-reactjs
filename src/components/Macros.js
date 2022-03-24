import React, {useState} from 'react'
const Macros = ({macros}) => {
    console.log("MACROS ON MACROSJS", macros)
    const [open, setOpen] = useState(false)
    return(
        <h1>{macros.basalMetRate}</h1>
    )
}
export default Macros