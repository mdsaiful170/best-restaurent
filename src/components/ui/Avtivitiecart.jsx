import { UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../public/lib/cn";


export const Avtivitiecart = (props) => {
  const { id, name, prof, star, date, des1, des2, imgbox } = props || {};

  return (
    <>
      <div
        key={id}
        className={cn(
          "bg-[#F8F8F8] rouned-xl relative overflow-hidden rounded-md shadow-sm px-2 py-5 md:py-6"
        )}
      >
        <div className="flex items-start gap-x-3">
          <div className="size-14 rounded-full grid place-items-center bg-white">
            <UserRound size={26} className="text-textColor" />
          </div>
          <div>
            <h3 className="text-textColor text-xl font-semibold">{name}</h3>
            <p className="text-[#8A8A8A] text-base font-normal pt-1">{prof}</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2 py-5">
          <div className="flex items-center gap-x-1">
            {Array.from(Array(5).keys()).map((el) => (
              <img src={star} alt="" key={el} />
            ))}
          </div>
          <p className="text-sm text-[09/11/2023]">{date}</p>
        </div>

        <p className="text-[#5E5E5E] text-base font-normal text-balance">
          {des1}
        </p>
        <br />
        <p className="text-[#5E5E5E] text-base font-normal text-balance ">
          {des2}
        </p>

        <div className="flex items-center gap-x-2  pt-6 md:pt-8 pb-3">
          {imgbox?.map((img, idx) => (
            <img
              src={img}
              alt=""
              key={idx}
              className="size-[118px] object-cover rounded-md"
            />
          ))}
        </div>

        <NavLink
          to={"/discover"}
          className={
            "font-medium font-lexend  text-base text-textColor underline underline-offset-1"
          }
        >
          Discover
        </NavLink>
      </div>
    </>
  );
};
