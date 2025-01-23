import { Link } from "react-router-dom";

function SecondaryButton({ title, icon, link }) {
    return (
        <Link
            to={link}
            className="flex items-center justify-center gap-2 px-4 py-2 transition-all border-2 rounded-lg group text-text font-body w-fit shadow-xxsmall border-text hover:border-accent hover:-translate-y-0.5 hover:text-accent"
        >
            <span>{title}</span>
            <span>{icon}</span>
        </Link>
    );
}

export default SecondaryButton;
