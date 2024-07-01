import { Link } from "react-router-dom";

export default function Public() {
  return <div>
    <h1>Public</h1>
    <p>This is a public page.</p>
    <p><Link to="/login">Login</Link></p>
    <p><Link to="/files">Home</Link></p>
  </div>;
}
