import Button from "./Button";
import { FaTimes, FaPlus } from "react-icons/fa";
const Header = ({ onAdd, showBtn }) => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <Button
        onClick={onAdd}
        className="btn"
        text={showBtn ? <FaTimes /> : <FaPlus />}
      />
    </header>
  );
};
export default Header;
