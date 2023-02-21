import {
  CARD_MODE_ON,
  CARD_MODE_OFF
} from "../constants/cardModeConstant"

export const changeCardMode = (lastState) => (dispatch) => {
  const mode = lastState.payload ? CARD_MODE_OFF : CARD_MODE_ON
  dispatch(mode)
}
