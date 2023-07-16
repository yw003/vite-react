import React, { Component } from "react";

interface Iprops {}
interface IState {
  name: String;
}
class Page301 extends Component<Iprops, IState> {
  state = {
    name: "123",
  };
  render() {
    return <div>301</div>;
  }
}
export default Page301;
