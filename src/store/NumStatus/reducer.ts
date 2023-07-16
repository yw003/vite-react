import handleNum from "./index";
let reducer = (
  state = {
    ...handleNum.state,
  },
  action: { type: string; val: number }
) => {
  //调用dispatch
  let newState = JSON.parse(JSON.stringify(state));
  // switch (action.type) {
  //   case handleNum.add1:
  //     handleNum.actions[handleNum.add1](newState, action);
  //     break;
  //   case handleNum.add2:
  //     handleNum.actions[handleNum.add2](newState, action);
  //     break;
  //   default:
  //     break;
  // }
  for (let key in handleNum.actionsNames) {
    if (action.type === handleNum.actionsNames[key]) {
      handleNum.actions[handleNum.actionsNames[key]](newState, action);
      break
    }
  }
  return newState;
};
export default reducer;
