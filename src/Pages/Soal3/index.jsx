import { Link } from "react-router-dom";
function Soal3() {
  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineaple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ];
  const fruitList = fruits.map((fruit) => {
    return (
      <li>
        <a>{fruit}</a>
      </li>
    );
  });

  function filter() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("soal3Input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("soal3Ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  return (
    <div className="container" id="Soal3">
      <div className="containerChild soal3Header">
        <h2>Soal 3</h2>
      </div>
      <div className="containerChild soal3Body">
        <input
          type="text"
          id="soal3Input"
          onKeyUp={filter}
          placeholder="Search for names"
        />
        <ul id="soal3Ul">{fruitList}</ul>
        <Link id="browserLink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Soal3;
