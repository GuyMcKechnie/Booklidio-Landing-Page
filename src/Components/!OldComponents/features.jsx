import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const Features = (props) => {
    const { heading, sections } = { ...FeaturesDefaults, ...props };
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="flex flex-col items-start">
                    <div className="w-full max-w-lg mb-12 rb-12 md:mb-18 lg:mb-20">
                        <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                            {heading}
                        </h3>
                    </div>
                    <div className="grid items-start grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <div className="mb-5 rb-5 md:mb-6">
                                    <img
                                        src={section.icon.src}
                                        className="size-12"
                                        alt={section.icon.alt}
                                    />
                                </div>
                                <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                                    {section.heading}
                                </h3>
                                <p className="mb-5 md:mb-6">
                                    {section.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
                                    <Button {...section.button}>
                                        {section.button.title}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FeaturesDefaults = {
    heading: "Long heading is what you see here in this feature section",
    sections: [
        {
            icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 1",
            },
            heading:
                "Long heading is what you see here in this feature section",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            button: {
                title: "Button",
                variant: "link",
                size: "link",
                iconRight: <RxChevronRight />,
            },
        },
        {
            icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 2",
            },
            heading:
                "Long heading is what you see here in this feature section",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            button: {
                title: "Button",
                variant: "link",
                size: "link",
                iconRight: <RxChevronRight />,
            },
        },
        {
            icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 3",
            },
            heading:
                "Long heading is what you see here in this feature section",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            button: {
                title: "Button",
                variant: "link",
                size: "link",
                iconRight: <RxChevronRight />,
            },
        },
    ],
};

export default Features;
