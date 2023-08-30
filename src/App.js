import "./App.css";
import { Link, Outlet } from "react-router-dom";
export function Home() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>contact</Link>
      </nav>
      <h1>my website</h1>
    </div>
  );
}
export function About() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>contact</Link>
      </nav>
      <h1>about us</h1>
      <Outlet />
    </div>
  );
}
export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>contact</Link>
      </nav>
      <h1>Contact us</h1>
    </div>
  );
}
function App() {
  return <Home />;
}

export default App;
