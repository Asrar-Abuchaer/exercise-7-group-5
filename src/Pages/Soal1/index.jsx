import { Link } from "react-router-dom";
import { useState } from "react";

function Soal1() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
    <div className="container" id="Soal1">
    <div className="containerChild header">
      <h1>Soal 1</h1>
    </div>

    <div  className="containerChild body">
      <button onClick={()=>setCount(count - 1)} id="subtract">-</button>
        <h2 id="output">{count}</h2>
      <button onClick={()=>setCount(count + 1)} id="add">+</button>
    </div>

    <div className="containerChild">
      <Link id="browserLink" to="/">
        Home
      </Link>
    </div>
  </div>
  </>
  );
}

export default Soal1;
