import { BiSolidStar } from "react-icons/bi";

const Testimonials = (props) => {
    const { heading, description, testimonials } = {
        ...TestimonialDefaults,
        ...props,
    };
    return (
        <section id="relume" className="px-[5%] py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="w-full max-w-lg mx-auto mb-12 text-center md:mb-18 lg:mb-20 text-text">
                    <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-heading">
                        Find Out What Our Customers Say
                    </h1>
                    <p className="md:text-md font-body">
                        You are the priority. For the people, from the people.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start justify-between w-full p-6 md:p-8"
                        >
                            <div className="flex items-center w-full gap-4 mb-4 md:w-fit">
                                <p className="text-lg font-semibold font-heading text-nowrap">
                                    {testimonial.name}
                                </p>
                                <div className="flex">
                                    {Array(testimonial.numberOfStars)
                                        .fill(null)
                                        .map((_, starIndex) => (
                                            <BiSolidStar
                                                key={starIndex}
                                                className="mr-1 text-yellow-500 size-6 md:size-4"
                                            />
                                        ))}
                                </div>
                            </div>
                            <blockquote className="md:text-md text-text font-body">
                                {testimonial.quote}
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TestimonialDefaults = {
    testimonials: [
        {
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
            name: "Themba Molefe",
            information: "30+ Textbooks Sold",
            numberOfStars: 5,
        },
        {
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
            name: "Roshaan Naidoo",
            information: "R2,100+ Saved",
            numberOfStars: 4,
        },
        {
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
            name: "Siyabonga Mkhize",
            information: "3 Year Customer",
            numberOfStars: 5,
        },
    ],
};

export default Testimonials;
