import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Soal1 from "./Pages/Soal1";
import Soal2 from "./Pages/Soal2";
import Soal3 from "./Pages/Soal3";
import { Text, Soal4 } from "./Pages/Soal4";
import { ContextProvider } from "./Pages/Soal4/Pages/Context";
import Chat from "./Pages/Soal4/Pages/Chat";
function App() {
  return (
    <ContextProvider>
      <div className="App" id="MainApp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route id="browserRoute" path="soal1" element={<Soal1 />} />
          <Route id="browserRoute" path="soal2" element={<Soal2 />} />
          <Route id="browserRoute" path="soal3" element={<Soal3 />} />
          <Route id="browserRoute" path="soal4" element={<Soal4 />} />
          <Route id="browserRoute" path="soal4/chat" element={<Chat />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
