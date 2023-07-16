import React from "react";
import { useSelector, useDispatch } from "react-redux";
import numStatus from '@/store/NumStatus/index'
export default function About() {
  //修改仓库数据
  const dispatch = useDispatch();
  //使用useSelector获取仓库数据
  const { num } = useSelector((state: RootState) => {
    return { num: state.handleNumReducer.num };
  });
  const { arr } = useSelector((state: RootState) => {
    return { arr: state.handleArrReducer.arr };
  });
  const changeNum = () => {
    // dispatch({ type: "add1" });
    dispatch({ type: "add2", val: 2 });
  };
  const changeNum1 = () => {
    // dispatch({ type: "add1" }); 同步写法
    //异步写法
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: "add1" });
    //   }, 1000);
    // });
    dispatch(numStatus.asyncActions.asyneAdd1)
  };
  const changeArr = () => {
    dispatch({ type: "arrPush", val: 2 });
  };
  return (
    <div>
      <p>{num}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum1}>异步按钮</button>
      <p>{arr}</p>
      <button onClick={changeArr}>按钮</button>
    </div>
  );
}
