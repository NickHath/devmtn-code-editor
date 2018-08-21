const initialState = {
  arrOfVar: [],
  animationTrigger: false
};

const ANIMATION_TRIGGER = "ANIMATION_TRIGGER";
const UPDATE_ARR_OF_VAR = "UPDATE_ARR_OF_VAR";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ANIMATION_TRIGGER:
      return Object.assign({}, state, { animationTrigger: action.payload });

    case UPDATE_ARR_OF_VAR:
      let arr = [...state.arrOfVar];
      arr.push(action.payload);
      return Object.assign({}, state, { arrOfVar: [...arr] });

    default:
      return state;
  }
}

export function animationTrigger(trigger) {
  return { type: ANIMATION_TRIGGER, payload: trigger };
}

export function updateArrOfVar(variable) {
  return { type: UPDATE_ARR_OF_VAR, payload: variable };
}
