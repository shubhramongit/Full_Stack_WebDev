//import Student from "./Student";
//import Counter from "./Counter";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
function App(props) {
  const[screen,setScreen]=useState("home");
  return (
    <div>
<button onClick={()=>setScreen("home")}>Home</button>
<button onClick={()=>setScreen("about")}>About</button>
{screen==="home" && <Home/>}
{screen==="about" && <About/>}
    </div>
/* <div>
<Counter/>
</div> */
/* <div>
  <Student name="Ritesh"/>
</div> */
  );
}


export default App;
