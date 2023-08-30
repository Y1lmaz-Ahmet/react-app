import "./App.css";
import { useRef } from "react";

function App() {
  const textTitle = useRef();
  const hexColor = useRef();
  const submitForm = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`title:${title} color:${color}`);
    textTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    <form onSubmit={submitForm}>
      <input type='text' placeholder='color title...' ref={textTitle} />
      <input type='color' ref={hexColor} />
      <button>add</button>
    </form>
  );
}

export default App;
