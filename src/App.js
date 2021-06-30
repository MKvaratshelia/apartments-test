import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCards } from './store/actions/index'
// import { GetService } from './services'
import './App.css';
import { Card } from './components/Card';

function App() {
  const cards = useSelector(store => store.cards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

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
