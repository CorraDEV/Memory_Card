export default function Card({name, imgUrl, cardId, onHandleCard, cardClass}) {    
    return (      
        <div className = {cardClass} id = {cardId}>
            <img width = {100} onClick = {onHandleCard} height = {100} src = {imgUrl}/>
            <p>{name}</p>            
            <p></p>
        </div>      
    )
}