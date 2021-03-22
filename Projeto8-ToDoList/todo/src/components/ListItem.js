import React from 'react'
import Card from './Card'
function ListItem(props){
    
    function DoneImg(props) {
        if (props.done) {
            return (<img src="./assets/checkin.svg" alt="checkin"></img>)
        } else {
            return (<img src="./assets/checkout.svg" alt="checkout"></img>)
        }
    }
    
    
    return (
<li key={props.item.id}>
                <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                    <div>
                        <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done} /> </button>
                        <button onClick={() => { props.onItemDeleted(props.item) }} ><img src="./assets/delete.svg" alt="delete"></img> </button>
                    </div>
                </Card>


            </li>
    )
}
export default ListItem