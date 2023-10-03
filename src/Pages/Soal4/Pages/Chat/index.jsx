import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { Header } from "../..";

function Chat() {
  const navigate = useNavigate();
  const { items, setItems } = useContext(Context);
  return (
    <div className="container" id="Chat">
      <Header />
      <div className="containerChild" id="TextChat">
        {items}
      </div>
      <div className="containerChild">
        <Link id="browserLink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Chat;
