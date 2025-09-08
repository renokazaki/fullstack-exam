import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className=" p-4 bg-gray-200">
        <ul className="flex justify-between space-x-4">
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
