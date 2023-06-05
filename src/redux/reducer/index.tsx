import { COUNTERDATA } from "../action";

const initialState = {
  getCounter: 0,
};

export default function Counter(state = initialState, action: any) {
  switch (action.type) {
    case COUNTERDATA:
      return { ...state, getCounter: action.payload };
    default:
      return state;
  }
}
