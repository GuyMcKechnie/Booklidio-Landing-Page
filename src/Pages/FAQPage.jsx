import FAQ from "../Components/Home/FAQ.jsx";
import PrimaryButton from "../Components/Common/Buttons/PrimaryButton.jsx";
import { CgChevronLeft } from "react-icons/cg";

function FAQPage() {
    const buttonVariables = { title: "Test", icon: <CgChevronLeft /> };
    return <FAQ />;
}

export default FAQPage;
