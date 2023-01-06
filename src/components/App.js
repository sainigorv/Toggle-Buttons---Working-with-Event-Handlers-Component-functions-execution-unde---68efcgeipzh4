import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [Data1, setData1] = useState("OFF");
  const [Data2, setData2] = useState("ON");

  function handleClick(event) {
    if (event.target.id === "btn1") {
      setData1("ON");
      setData2("OFF");
    } else {
      setData1("OFF");
      setData2("ON");
    }
  }

  return (
    <div className="App">
      <button id="btn1" onClick={(e) => handleClick(e)}>
        {Data1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={(e) => handleClick(e)}>
        {Data2}
      </button>
    </div>
  );
};

export default App;
