import { UserRound } from "lucide-react";
import { cn } from "../../../public/lib/cn";

export const Bellacart = (props) => {
  const { id, name, prof, stars, date, des1, className } = props || {};

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
          "overflow-hidden relative w-full bg-[#F8F8F8] rounded-[20px] p-5",
          className
        )}
      >
        <div className="flex items-start gap-x-3">
          <div className=" p-4 rounded-full bg-white ">
            <UserRound className="text-heading " size={26} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-heading font-rohoob">
              {name}
            </h3>
            <p className="text-base text-secondary font-normal">{prof}</p>
            <div className="flex items-center gap-x-3 pt-3">
              <div className="flex items-center gap-x-1">
                {renderStars(stars)}
              </div>
              <p className="text-sm text-secondary font-normal"> {date}</p>
            </div>

            <div className="pt-4">
              <p className="text-secondary max-w-xl font-normal text-base">{des1}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
