import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-between  items-center h-32 border-b-2 border-gray-300">
        <ul className="flex justify-around w-full">
          <li>
            <Link to="/top">Page1</Link>
          </li>
          <li>
            <Link to="/publish">Page2</Link>
          </li>
          <li>
            <Link to="/page3">Page3</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
