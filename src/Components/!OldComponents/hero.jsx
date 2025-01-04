import { Button } from "@relume_io/relume-ui";

const Hero = (props) => {
    const { heading, description, buttons, image } = {
        ...HeaderDefaults,
        ...props,
    };
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="mb-12 text-center rb-12 md:mb-18 lg:mb-20">
                        <div className="w-full max-w-lg">
                            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                                {heading}
                            </h1>
                            <p className="md:text-md">{description}</p>
                            <div className="flex items-center justify-center mt-6 gap-x-4 md:mt-8">
                                {buttons.map((button, index) => (
                                    <Button key={index} {...button}>
                                        {button.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src={image.src}
                            className="object-cover size-full"
                            alt={image.alt}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const HeaderDefaults = {
    heading: "Medium length hero heading goes here",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
    image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
    },
};

export default Hero;
