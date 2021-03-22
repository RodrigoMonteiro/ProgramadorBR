import React, { useState } from 'react'

function TodoForm(props) {
    const [text, SetText] = useState("")

    function handleChange(event) {
        let text = event.target.value
        SetText(text)
        console.log(text)
    }
    function addItem(event) {
        event.preventDefault()
        if (text) {
            props.onAddItem(text)
            SetText("")
        } else {
            alert("O campo está vazio!")
        }
    }
    return (
        <form>
            <input type="text" onChange={handleChange} value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm