import { useState, useEffect } from 'react'
import Card from './components/Card'
import './styles/App.css'
import getCatsList from './getCatsList';

export default function App() {        
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cardList, setCardList] = useState(null)
  const [playerList, setPlayerList] = useState([])     

  useEffect(() => {
    getCatsList().then(catsList => {      
      setCardList(catsList);            
    });        
  }, []);    

  useEffect(() => {
    if(score > bestScore){
      setBestScore(score);
    }
    if(cardList){
      const cardListRandomized = [...cardList];
      setCardList(cardListRandomized.sort(() => Math.random() - 0.5));
    }    
  }, [score]);     

  const handleCard = (evt) => {
    if(playerList.find(ele => ele.id === evt.target.parentElement.id)){
      setScore(0);
      setPlayerList([]);
    }
    else{
      setScore(score + 1);
      setPlayerList([...playerList, evt.target.parentElement]);
    }
  };  
    
  return (
    (!cardList)
    ?
    <h2>...Loading</h2>
    :
    <>      
      <h1>Memory Card</h1>
      <div className='scoreBoard'>
        <span>score: {score}</span><span>best score: {bestScore}</span>
      </div>      
      <div className = 'box'>
        {cardList.map(ele => <Card cardClass = 'card' key = {ele.id} cardId = {ele.id} name = {ele.breeds[0].name} 
        imgUrl = {ele.url} onHandleCard = {handleCard} ></Card>)}
      </div>
    </>
  )
}