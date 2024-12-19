import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../public/lib/cn";

export const Latestcart = (props) => {
  const {
    id,
    imgbox,
    name,
    des,
    star,
    rating,
    review,
    className,
    className2,
    link,
  } = props || [];
  const [currentindex, setindex] = useState(0);
  const imgdata = imgbox[currentindex];

  const handleClick = (index) => {
    setindex(index);
  };

  const renderStars = (stars) => {
    let filledStars = [];
    let emptyStars = [];

    // Push filled and empty stars based on the rating
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        filledStars.push("./yellow-star2.svg");
      } else {
        emptyStars.push("./gray-start.svg");
      }
    }

    return (
      <div className="flex gap-x-1">
        {filledStars.map((star, index) => (
          <img src={star} key={index} alt="img" />
        ))}
        {emptyStars.map((star, index) => (
          <img src={star} key={index} alt="img" />
        ))}
      </div>
    );
  };

  return (
    <>
      <div
        key={id}
        className={cn(
          " overflow-hidden relative rounded-2xl hover:shadow-md transition-all duration-200 bg-[#F8F8F8]  cursor-pointer",
          className
        )}
      >
        <div className={cn("relative w-full h-[220px]", className2)}>
          <img
            src={imgdata.img || ""}
            alt="img"
            className={`h-full w-full  object-cover `}
          />
          <div className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {imgbox.map((_, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentindex ? "bg-white" : "bg-gray-100/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <NavLink to={link}>
          <div className="p-3">
            <h3 className="text-lg font-rohoob text-textColor font-semibold">
              {name}
            </h3>
            <p className="text-secondary text-base pt-2">{des}</p>
            <div className="flex  items-center pt-4 md:pt-6  gap-x-2">
              <div className="flex items-center gap-x-[2px]">
                {renderStars(star)}
              </div>
              <p
                className="
             text-textColor  text-sm font-semibold"
              >
                {rating} <span className="text-secondary ">({review})</span>
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
