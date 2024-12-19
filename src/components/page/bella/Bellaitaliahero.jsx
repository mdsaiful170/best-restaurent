import { NavLink, useNavigate } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";


const Bellaitaliahero = () => {
  const navigate = useNavigate();

  // Your code here
  return (
    <>
      <section className="pt-3 pb-1">
        <Containerbox>
          <div className="flex items-center gap-x-1 text-textColor font-medium pb-4">
            <button onClick={() => navigate("/")}>Home</button>/{" "}
            <NavLink
              className={({ isActive }) =>
                `  ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary"
                }`
              }
              to={"/bella"}
            >
              bellaItalia
            </NavLink>
          </div>
        </Containerbox>
      </section>
      <section className="bg-bella  relative bg-no-repeat bg-left  bg-cover  min-h-[70vh]">
        <Containerbox>
          <div className="">
            <Headingbox className="text-white text-5xl font-semibold font-lexend">
              Bella italia
            </Headingbox>

            <div className="flex text-white items-center gap-x-1 pt-3">
              {Array.from(Array(5).keys()).map((el) => (
                <img src={"./yellow-star.svg"} alt="" key={el} />
              ))}
              <span>5.0</span>
              <span>(876 review)</span>
            </div>

            <p className="text-lg font-normal text-white font-rohoob pt-4 max-w-full md:max-w-lg ">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <p className="text-lg font-normal text-white font-rohoob  max-w-full md:max-w-lg">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <br />
            <br />
            <p className="flex items-center gap-x-1 text-lg font-semibold text-white">
              <MapPin size={24} /> Singapour, Bishan-Ang Mo Kio Park{" "}
            </p>
            <p className="flex pt-4 items-center gap-x-1 text-lg font-semibold text-white">
              <Clock size={24} />
              7j/7, 08:00 - 22:00{" "}
            </p>
          </div>
        </Containerbox>
        <img
          src="./bella-logo.png"
          className="max-w-full h-auto object-contain absolute left-1/2 -bottom-16 transform -translate-x-1/2"
          alt=""
        />
      </section>
    </>
  );
};

export default Bellaitaliahero;
