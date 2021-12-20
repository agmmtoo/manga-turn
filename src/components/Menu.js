import { ImMenu3, ImMenu4, ImHome, ImDatabase, ImUser } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="text-center">
            <button onClick={() => setOpen(!open)}>
                {open
                    ? <ImMenu4 size={30} />
                    : <ImMenu3 size={30} />}
            </button>
            {open
                ? <Nav />
                : null}
        </div>
    );
};

const Nav = () =>
    <nav>
        <div className="flex flex-col items-center gap-2 mt-2">
            <Link to="/mangas"><ImDatabase /> All</Link>
            <Link to="/"><ImHome /> Home</Link>
            <Link to="/profile"><ImUser /> Profile</Link>
        </div>
    </nav>

export default Menu;