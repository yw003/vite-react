const store = {
  state: {
    num: 20,
  },
  actions: {
    add1(newState: { num: number }, action: { type: string; val: number }) {
      newState.num++;
    },
    add2(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    },
  },
  // add1: "add1",
  // add2: "add2",
  // actionsNames: {
  //   add1: "add1",
  //   add2: "add2",
  // },
  asyncActions: {
    asyneAdd1(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: "add1" });
      }, 1000);
    },
  },
  actionsNames: {},
};
let actionsNames = {};
for (let key in store.actions) {
  actionsNames[key] = key;
}
store.actionsNames = actionsNames;
export default store;
