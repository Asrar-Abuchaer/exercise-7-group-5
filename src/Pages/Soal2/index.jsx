import { Link } from "react-router-dom";
import StopWatch from "./Stopwatch";
function Soal2() {
  return (
    <div className="container" id="Soal2">
      <div className="containerChild header">
        <h2>Soal 2</h2>
      </div>
      <div className="containerChild">
        <StopWatch />
        <Link id="browserLink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Soal2;
