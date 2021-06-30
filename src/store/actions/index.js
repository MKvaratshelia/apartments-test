
import { GET_CARDS } from "../types/types"
import { GetService } from '../../services/index'

const getService = new GetService()

const setCards = (cards) => {
  return {
    type: GET_CARDS,
    payload: cards
  }
}

export const getCards = () => {
  return (dispatch) => {
    getService.getResource('apartments-test/entities.json')
      .then(data => dispatch(setCards(data.apartments)))
  }
}