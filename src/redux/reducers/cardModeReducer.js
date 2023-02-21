import {CARD_MODE_ON, CARD_MODE_OFF} from "../constants/cardModeConstant"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { cardMode: CARD_MODE_ON }, action) => {
  if (action.type === CARD_MODE_ON.type) {
    return {
      cardMode: CARD_MODE_ON
    }
  }
  if (action.type === CARD_MODE_OFF.type) {
    return {
      cardMode: CARD_MODE_OFF
    }
  }
  return state
}
