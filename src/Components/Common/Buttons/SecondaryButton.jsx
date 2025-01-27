import { Link } from "react-router-dom";

function SecondaryButton({ title, icon, link }) {
    return (
        <Link
            to={link}
            className="group flex items-center justify-center font-heading gap-2 px-4 py-2 text-text transition-all rounded-lg w-fit shadow-xxsmall shadow-white bg-white border-text border hover:-translate-y-0.5"
        >
            <span className="text-lg uppercase">{title}</span>
            <span className="group-hover:translate-x-0.5 text-lg transition-all">
                {icon}
            </span>
        </Link>
    );
}

export default SecondaryButton;
