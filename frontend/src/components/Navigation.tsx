import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="bg-amber-500 flex justify-between items-center flex-1 ">
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
