import React, { useState } from 'react'

function ToDoitem(props) {
    const [check, setCheck] = useState(props.item.isDisable)
    const handleClick = () =>{
        check ? setCheck(false) : setCheck(true)
    }
   
    return (
             <li className = {(check) ? "noGach" : "gach"} onClick = {handleClick} >{props.item.name} </li>
    )
}
export default ToDoitem;