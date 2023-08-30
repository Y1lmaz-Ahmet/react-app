import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/y1lmaz-ahmet`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <h1>DATA:</h1>;
}

export default App;
