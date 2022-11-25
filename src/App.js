import "./App.css";
import Navbar from "./navbar";
import Home from "./home";

function App() {
  const title = "Welcome to Home";
  const likes = 50;
  const person = { name: "Ishan", age: "22" };
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}

export default App;
