import { useEffect,useState } from "react"
function App() {
   const[message,setmessage]=useState("");
   useEffect(()=>{
    fetch("http://localhost:5000/api/hello")
    .then(res=>res.json())
    .then(data=>setmessage(data.message));
   },[]);
  return (
    <div>
      <h1>React Express+Example</h1>
      <p1>{message}</p1>
    </div>
  );
}
export default App
