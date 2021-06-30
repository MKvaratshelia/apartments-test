import { GET_CARDS } from '../types/types'

const initialState = {
  cards: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, cards: [...state.cards, ...action.payload] }
    default:
      return state;
  }
};