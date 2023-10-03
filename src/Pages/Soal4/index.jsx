import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Pages/Context";
import { useNavigate } from "react-router-dom";

function Soal4() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { items, setItems } = useContext(Context);
  function value() {
    let chatInput, chatInputValue;
    chatInput = document.querySelector("#chatInputSoal4");
    chatInputValue = chatInput.value;
    setItems(chatInputValue);
  }
  function test() {
    value();
    navigate("chat");
  }

  return (
    <div className="container" id="Soal4">
      <Header />
      <div className="containerChild body">
        <textarea name="chatInputSoal4" id="chatInputSoal4" />

        <button type="button" onClick={test}>
          Send
        </button>
      </div>

      <div className="containerChild footer">
        <Link id="browserLink" to="/">
          Home
        </Link>
        <Link id="browserLink" to="chat">
          Chat
        </Link>
      </div>
    </div>
  );
}

function Text(props) {
  return <p class="paragraph">{props.text}</p>;
}

function Header() {
  return (
    <div className="containerChild header">
      <h2>Soal 4</h2>
      <h3>ChitChat - Express Your Feeling</h3>
    </div>
  );
}
export { Text, Soal4, Header };
