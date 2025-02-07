import { BiSolidStar } from "react-icons/bi";
import { testimonials } from "../../Data/Testimonials";
import CircleDoodle from "../Common/Doodles/CircleDoodle.jsx";
import LineDoodle from "../Common/Doodles/LineDoodle.jsx";

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="doodle top-[10%] right-[20%] size-30">
        <CircleDoodle />
      </div>
      <div className="doodle bottom-[5%] left-[20%] size-30 rotate-45">
        <LineDoodle />
      </div>
      <div className="container">
        <div className="text-container">
          <h1>Customers Satisfaction Is Our Top Priority</h1>
          <p>Booklidio is from the people but also for the people.</p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border-primary hover:border-accent flex w-full flex-col items-start justify-start rounded-lg border-2 p-2"
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <h3>{testimonial.name}</h3>
                  <div className="flex">
                    {Array(testimonial.numberOfStars)
                      .fill(null)
                      .map((_, starIndex) => (
                        <BiSolidStar
                          key={starIndex}
                          className="mr-1 size-4 text-yellow-500"
                        />
                      ))}
                  </div>
                </div>
                <p>{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
