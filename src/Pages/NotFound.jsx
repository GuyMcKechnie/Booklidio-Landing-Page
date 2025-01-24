import { Link } from "react-router-dom";
import PrimaryButton from "../Components/Common/Buttons/PrimaryButton";
import { BsBack, BsBackspace } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { BiHome } from "react-icons/bi";

const NotFound = () => {
    const buttonVariables = {
        title: "Return Home",
        icon: <BiHome size={24} />,
        link: "/",
    };
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container flex flex-col items-center max-w-3xl mx-auto text-center">
                <h1 className="mb-8 text-4xl font-bold">Page Not Found</h1>
                <p className="mb-8 text-lg">
                    Sorry, the page you are looking for does not exist. It might
                    have been moved or deleted.
                </p>
                <PrimaryButton
                    title={buttonVariables.title}
                    icon={buttonVariables.icon}
                    link={buttonVariables.link}
                />
            </div>
        </section>
    );
};

export default NotFound;
