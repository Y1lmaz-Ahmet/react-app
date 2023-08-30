import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  console.log(checked);
  return (
    <div className='App'>
      <div>
        <input
          type='checkbox'
          id='checkbox'
          value={checked}
          onChange={setChecked}
        />
        <label htmlFor='checkbox'>{checked ? "checked" : "not checked"}</label>
      </div>
    </div>
  );
}

export default App;
