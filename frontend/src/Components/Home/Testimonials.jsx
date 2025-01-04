import { BiSolidStar } from "react-icons/bi";

const Testimonials = (props) => {
    const { heading, description, testimonials } = {
        ...TestimonialDefaults,
        ...props,
    };
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="w-full max-w-lg mx-auto mb-12 text-center md:mb-18 lg:mb-20">
                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h1>
                    <p className="md:text-md">{description}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start justify-between w-full p-6 border border-border-primary md:p-8"
                        >
                            <div className="flex mb-5 md:mb-6">
                                {Array(testimonial.numberOfStars)
                                    .fill(null)
                                    .map((_, starIndex) => (
                                        <BiSolidStar
                                            key={starIndex}
                                            className="mr-1 size-6"
                                        />
                                    ))}
                            </div>
                            <blockquote className="md:text-md">
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex flex-col items-start w-full mt-5 md:mt-6 md:w-fit md:flex-row md:items-center">
                                <img
                                    src={testimonial.avatar.src}
                                    alt={testimonial.avatar.alt}
                                    className="object-cover mb-4 rounded-full size-12 min-h-12 min-w-12 md:mb-0 md:mr-4"
                                />
                                <div>
                                    <p className="font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p>
                                        <span>{testimonial.position}</span>,{" "}
                                        <span>{testimonial.companyName}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TestimonialDefaults = {
    heading: "Customer testimonials",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonials: [
        {
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
            avatar: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                alt: "Testimonial avatar 1",
            },
            name: "Name Surname",
            position: "Position",
            companyName: "Company name",
            numberOfStars: 5,
        },
        {
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
            avatar: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                alt: "Testimonial avatar 2",
            },
            name: "Name Surname",
            position: "Position",
            companyName: "Company name",
            numberOfStars: 5,
        },
        {
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
            avatar: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                alt: "Testimonial avatar 3",
            },
            name: "Name Surname",
            position: "Position",
            companyName: "Company name",
            numberOfStars: 5,
        },
    ],
};

export default Testimonials;
