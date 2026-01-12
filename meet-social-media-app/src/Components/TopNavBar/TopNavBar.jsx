import "./TopNavBar.css";
import { FiMessageCircle } from "react-icons/fi";
function TopNavBar({ logo}) {
  return (
    <header className="top-navbar">
      <h1 className="logo">{logo}</h1>
      <p className="icon"> <FiMessageCircle /></p>
    </header>
  );
}

export default TopNavBar;
