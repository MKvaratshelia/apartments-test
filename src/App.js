import React, { useState, useEffect } from 'react'
import { GetService } from './services'
import './App.css';
import { Card } from './components/Card';

const getApartments = new GetService()

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getApartments.getResource('entities.json')
      .then(data => setCards(data.apartments))
  }, [])

  return (
    <div className="App">
      <section className="main">
        <div className="main__cards-list cards-list">
          {cards.map(card => {
            return <Card key={card.id} card={card} />
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
