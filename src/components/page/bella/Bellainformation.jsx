import {
  Clock,
  MapPin,
  PanelTop,
  PhoneCall,
  Utensils,
} from "lucide-react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";



const Bellainformation = () => {
  return (
    <>
      <section>
        <Containerbox className={"max-w-[1200px]"}>
          <div className="grid grid-cols-1 gap-8 md:place-items-center md:items-center md:grid-cols-2">
            <div className="md:place-self-center">
              <Headingbox
                className={
                  "text-3xl font-semibold font-lexend text-heading pb-8 md:pb-10"
                }
              >
                More informations
              </Headingbox>
              <ul className="space-y-7">
                <li>
                  {" "}
                  <Utensils
                    className="inline-block  "
                    fill="#000000"
                    size={22}
                  />{" "}
                  See the menu
                </li>
                <li>
                  {" "}
                  <PhoneCall
                    className="inline-block  "
                    fill="#000000"
                    size={22}
                  />{" "}
                  +847 87 37 29 01
                </li>
                <li>
                  {" "}
                  <MapPin
                    className="inline-block text-white "
                    fill="#000000"
                    size={22}
                  />{" "}
                  Singapour, Bishan
                </li>
                <li>
                  {" "}
                  <Clock
                    className="inline-block text-white "
                    fill="#000000"
                    size={22}
                  />{" "}
                  7j/7, 08:00 - 22:00
                </li>
                <li>
                  {" "}
                  <PanelTop
                    className="inline-block text-white "
                    fill="#000000"
                    size={22}
                  />{" "}
                  www.bellaitalia.com
                </li>
              </ul>
              <div className="flex items-center gap-x-4 pt-10">
                <img src="./fb-img.png" className="w-fit h-auto " alt="" />
                <img src="./in-img.png" className="w-fit h-auto " alt="" />
                <img src="./tiktok-img.png" className="w-fit h-auto " alt="" />
                <img src="./w-img.png" className="w-fit h-auto " alt="" />
              </div>
            </div>
            <div>
              <img
                src="./b-map.png"
                className="max-w-full rounded-md object-cover h-[50vh] "
                alt="img"
              />
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Bellainformation;
