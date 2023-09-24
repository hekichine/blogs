import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Home page";
  }, []);
  return (
    <>
      Home pag
      <p>
        <a href="">asdkasd;</a>
      </p>
      <button className="sta-btn_link">asldjas</button>
      <button className="sta-btn_solid">asldjas</button>
      <button className="sta-btn_outline">asldjas</button>
      <h1>abcxyz</h1>
    </>
  );
}

export default App;
