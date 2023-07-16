import handleArr from "./index";
let reducer = (
  state = { ...handleArr.state },
  action: { type: string; val: number }
) => {
  // let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case handleArr.arrPush:
      handleArr.actions[handleArr.arrPush](state, action);
      break;
    default:
      break;
  }
  return state;
};
export default reducer;
