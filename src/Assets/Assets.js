import { v4 as uuid4 } from "uuid";

export const assets = {
    hero,
    studyGuide1,
    studyGuide2,
    studyGuide3,
    studyGuide4,
};

export const products = [
    {
        id: uuid4(),
        image: accountingImage,
        name: "Accounting",
        price: 120,
        grade: 2,
        subject: "Afrikaans",
        description:
            "By ensuring that deliveryFee is properly declared and the ShopContextProvider component is correctly defined and used, you should be able to resolve the defaultValue is not defined error. This setup ensures that the products state is accessible within the Collections component.",
    },
    {
        id: uuid4(),
        image: accountingImage,
        name: "Accounting",
        price: 120,
        grade: 1,
        subject: "English",
        description:
            "By ensuring that deliveryFee is properly declared and the ShopContextProvider component is correctly defined and used, you should be able to resolve the defaultValue is not defined error. This setup ensures that the products state is accessible within the Collections component.",
    },
];

import hero from "./hero.png";
import accountingImage from "./Subjects/acc-subject.png";
import businessImage from "./Subjects/bus-subject.png";
import economicsImage from "./Subjects/eco-subject.png";
import itImage from "./Subjects/it-subject.png";
import studyGuide1 from "./Subjects/study-guide-1.jpg";
import studyGuide2 from "./Subjects/study-guide-2.jpg";
import studyGuide3 from "./Subjects/study-guide-3.jpg";
import studyGuide4 from "./Subjects/study-guide-4.jpg";
