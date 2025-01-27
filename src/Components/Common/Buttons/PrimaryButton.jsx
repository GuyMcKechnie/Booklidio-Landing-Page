import { Link } from "react-router-dom";
import "./PrimaryButton.css";

function PrimaryButton({ title, icon, link }) {
    return (
        <Link
            to={link}
            className="flex items-center justify-center gap-2 px-4 py-2 text-white transition-all rounded-lg animated-gradient primary-button group w-fit shadow-xxsmall shadow-primary font-heading bg-primary hover:bg-gradient"
        >
            <span className="text-lg uppercase">{title}</span>
            <span className="group-hover:translate-x-0.5 text-lg transition-all">
                {icon}
            </span>
        </Link>
    );
}

export default PrimaryButton;
