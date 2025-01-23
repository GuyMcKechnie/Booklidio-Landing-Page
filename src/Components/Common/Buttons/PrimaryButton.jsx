import { Link } from "react-router-dom";

function PrimaryButton({ title, icon, link }) {
    return (
        <Link
            to={link}
            className="group flex items-center justify-center gap-2 px-4 py-2 text-white transition-all rounded-lg w-fit shadow-xxsmall shadow-primary bg-primary hover:bg-accent hover:shadow-accent hover:-translate-y-0.5"
        >
            <span>{title}</span>
            <span className="group-hover:translate-x-0.5 transition-all">
                {icon}
            </span>
        </Link>
    );
}

export default PrimaryButton;
