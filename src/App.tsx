// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Comp1 from "@/components/Comp1/index";
import Comp2 from "@/components/Comp2/index";
import router from "./router/index";
import { useRoutes, Link } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)
  const outlet = useRoutes(router);
  return (
    <div>
      {/* <Comp1></Comp1> */}
      {/* <Comp2></Comp2> */}
      {/* <Link to="/home">home</Link>
      <Link to="/about">about</Link> */}
      {outlet}
    </div>
  );
}

export default App;
