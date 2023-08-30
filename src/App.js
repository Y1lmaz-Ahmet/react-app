import "./App.css";
import React, { useEffect, useState } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt="github account's avatar picture" height={150} />
    </div>
  );
}
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/y1lmaz-ahmet`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );

  return <h1>DATA:</h1>;
}

export default App;
