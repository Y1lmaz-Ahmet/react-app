import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submitForm = (e) => {
    e.preventDefault();
    alert(`title:${title} color:${color}`);
    setTitle("");
    setColor("#000000");
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type='text'
        placeholder='color title...'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type='color'
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button>add</button>
    </form>
  );
}

export default App;
