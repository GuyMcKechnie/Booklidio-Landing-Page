import { BiCheck, BiCross, BiPlus } from "react-icons/bi";
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Common/Buttons/SecondaryButton.jsx";
import { useState } from "react";

function Rating() {
    const [feedbackToggle, setFeedbackToggle] = useState("Not Helpful");
    return (
        <div className="flex items-center justify-between gap-4">
            <h1 className="text-xl">Find what you need?</h1>
            <PrimaryButton
                title={"Yes"}
                icon={<BiCheck size={24} />}
                link={""}
                onSubmit={() => setFeedbackToggle("Helpful")}
            />
            <SecondaryButton
                title={"No"}
                icon={<BiPlus className="rotate-45" size={24} />}
                link={""}
                onSubmit={() => setFeedbackToggle("Not Helpful")}
            />
        </div>
    );
}

export default Rating;
