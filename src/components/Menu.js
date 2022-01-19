import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="text-center">
            <button onClick={() => setOpen(!open)}>
                <ImMenu size={35} />
            </button>
            {open
                ? <Nav />
                : null}
        </div>
    );
};

const Nav = () =>
    <nav className="flex flex-col py-5 gap-8">
        <Link to="/mangas">All Manga</Link>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
    </nav>

export default Menu;