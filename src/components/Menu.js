import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);
    return (
        <div className="text-center">
            <button onClick={toggleMenu}>
                <ImMenu size={35} />
            </button>
            {open
                ? <Nav toggleMenu={toggleMenu} />
                : null}
        </div>
    );
};

const Nav = ({ toggleMenu }) =>
    <nav className="flex flex-col py-5 gap-8 font-medium" onClick={toggleMenu}>
        <Link to="/mangas">All Manga</Link>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
    </nav>

export default Menu;