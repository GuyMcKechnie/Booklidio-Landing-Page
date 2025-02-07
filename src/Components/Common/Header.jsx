import { assets } from "../../Assets/Assets";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="fixed z-50 w-full h-16 bg-white drop-shadow-md px-[5%]">
            <div className="flex items-center justify-between w-full h-full">
                <Link to="/">
                    <img
                        src={assets.header}
                        alt="logo"
                        className="h-10 lg:h-12"
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
