import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="BrandLogo">
        <a href="/">khalil232.com</a>
      </div>
      <div className="NavList">
        <ul>
          <li>
            <a href="https://khalil232.com">Home</a>
          </li>
          <li>
            <a href="https://blog.khalil232.com">Blogs</a>
          </li>
          <li>
            <a href="https://apps.khalil232.com/">Apps</a>
          </li>
          <li>
            <a href="https://khalil232.com/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
