import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);
    return (
        <div className="text-center">
            <button onClick={toggleMenu}>
                <ImMenu size={35} className={open ? "text-indigo-800 dark:text-indigo-400" : ""} />
            </button>
            {open
                ? <Nav toggleMenu={toggleMenu} />
                : null}
        </div>
    );
};

const Nav = ({ toggleMenu }) =>
    <nav className="flex flex-col py-5 gap-8 font-medium" onClick={toggleMenu}>
        <Link to="/mangas" className="nav-link">All Manga</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
    </nav>

export default Menu;