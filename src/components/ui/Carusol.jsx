import { useState } from "react";
import { cn } from "../../../public/lib/cn";

export const Carusol = (props) => {
  const { id, imgbox, name, des, star, rating, review, className } =
    props || [];
  const [currentindex, setindex] = useState(0);

  const imgdata = imgbox[currentindex];

  const handleClick = (index) => {
    setindex(index);
  };
  return (
    <>
      <div
        key={id}
        className={cn(
          " overflow-hidden relative rounded-2xl bg-[#F8F8F8]  cursor-pointer",
          className
        )}
      >
        <img
          src={imgdata.img || ""}
          alt="img"
          className="w-full h-[213px] object-cover"
        />
        <div className="p-3">
          <h3 className="text-lg font-rohoob text-textColor font-semibold">
            {name}
          </h3>
          <p className="text-secondary text-base pt-2">{des}</p>
          <div className="flex  items-center pt-4 md:pt-6  gap-x-2">
            <div className="flex items-center gap-x-[2px]">
              {Array.from(Array(5).keys()).map((el) => (
                <img src={star} alt="" key={el} />
              ))}
            </div>
            <p
              className="
             text-textColor  text-sm font-semibold"
            >
              {rating} <span className="text-secondary ">({review})</span>
            </p>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex gap-2">
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
        </div>
      </div>
    </>
  );
};
