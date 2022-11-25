import "./App.css";

function App() {
  const title = "Welcome to Home";
  const likes = 50;
  const person = { name: "Ishan", age: "22" };
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <div className="content">
        <h1>
          {title} {person.name}
        </h1>
        <p>Liked {likes}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
