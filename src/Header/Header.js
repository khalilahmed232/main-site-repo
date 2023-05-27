import './Header.css';

function Header() {
    return (
        <div className="Header">
            <div className='BrandLogo'>
                <a href="/">
                    khalil232.com
                </a>
            </div>

            <div className='NavList'>
                <ul>
                    <li>
                        <a href="/Home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/About">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/Blogs">
                            Blogs
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
