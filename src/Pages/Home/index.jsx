import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div
        className="containerChild homeHeader
            "
      >
        <h1>Group 5</h1>
      </div>
      <div className="containerChild homeBody">
        <Link id="browserLink" to="/soal1">
          Soal 1
        </Link>
        <Link id="browserLink" to="/soal2">
          Soal 2
        </Link>
        <Link id="browserLink" to="/soal3">
          Soal 3
        </Link>
        <Link id="browserLink" to="/soal4">
          Soal 4
        </Link>
      </div>
    </div>
  );
}
export default Home;
