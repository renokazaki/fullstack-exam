import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="h-16 flex justify-between items-center border-b-2 border-gray-300 ">
        <ul className="flex justify-around w-full">
          <li>
            <Link to="/question/top">Top</Link>
          </li>
          <li>
            <Link to="/question/publish">publishQuestion</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
