import React, { useState } from 'react'


export const Card = ({ card }) => {
  const { title, description, image_url } = card
  const [liked, setLiked] = useState(false)

  const cls = liked ? ['card__like-icon card__like-icon_liked'] : ['card__like-icon']

  const handleLikeClick = () => {
    setLiked(prev => !prev)
  }

  return (
    <div className="cards-list__card card">
      <img src={image_url} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <button onClick={handleLikeClick} className={cls.join(' ')}></button>
    </div>
  )
}