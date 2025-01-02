import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaTimes className="text-3xl" />
        ) : (
          <FaShoppingCart className="text-3xl" />
        )}
      </div>
    </div>
  );
};

export default Header;
