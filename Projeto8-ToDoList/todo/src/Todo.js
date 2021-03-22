import React, { useEffect, useState } from 'react'
import './Todo.css'
import List from './components/List'
import Modal from './components/Modal'
import TodoForm from './components/TodoForm'
import Item from './components/Item'
function Todo() {

    const SAVED_ITEMS = "savedItems"
    const [showModal, setShowModal] = useState(false)
    const [items, SetItems] = useState([])

    // Vai executar apenas uma vez => []
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            SetItems(savedItems)
        }
    }, [])

    // Vai ficar de "olho" na mudança de estado do items
    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    // De pai para filho (props)
    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        SetItems(filteredItems)
    }

    // De pai para filho (props)
    function onAddItem(text) {

        let item = new Item(text)
        SetItems([...items, item])
        onHideModal()

    }

    // Dde pai para filho
    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it
        })
        SetItems(updatedItems)
    }

    function onHideModal(evento) {
       
            setShowModal(false)
        
    }

    return (
        <div className="container">
            <header className={"header"}>
                <h1>To do list </h1>
                <button onClick={()=> setShowModal(true)} className="addButton">+</button>
            </header>

            <List items={items} onItemDeleted={onItemDeleted} onDone={onDone} />
            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem} />
            </Modal>
        </div>
    )
}

export default Todo