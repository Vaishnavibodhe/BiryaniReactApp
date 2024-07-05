import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Hyderabadi Biryani",
    description:
      "This is Hyderabadi biryani Which taste's awesome never regretful taste and melting in mouth quality",
  },
  {
    id: 2,
    img: Img,
    name: "Chiken kari",
    description:
      "with a biryani want to have a curry and this is tasty curry which can be in compitation of biryani",
  },
  {
    id: 3,
    img: Img3,
    name: "Cold Cofee",
    description:
      "we serves cold cofee as well complimentory with lots of sweetness",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
            Each type of Biryani tells its own story, 
            a testament to the diverse culinary traditions of India, 
            and our delivery service brings these authentic, 
            delicious experiences straight to your doorstep, 
            allowing you to explore the rich tapestry of Biryani from the comfort of your home."
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
