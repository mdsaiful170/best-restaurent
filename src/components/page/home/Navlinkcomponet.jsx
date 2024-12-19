import { NavLink } from "react-router-dom";

import {
  Beer,
  BrickWall,
  CarFront,
  Drumstick,
  Dumbbell,
  FerrisWheel,
  Home,
  Hotel,
  ShoppingBasket,
  Shrub,
  UtensilsCrossed,
  WashingMachine,
} from "lucide-react";
import { Containerbox } from "../../ui/Containerbox";


const NabLinkdata = [
  { id: 1, icon: BrickWall, text: "all" },
  { id: 2, icon: UtensilsCrossed, text: "Restaurants", to: "/" },
  { id: 3, icon: Hotel, text: "Hotels", to: "hotels" },
  { id: 4, icon: Home, text: "Home.Services", to: "/homeservices" },
  { id: 5, icon: ShoppingBasket, text: "Shopping", to: "/shopping" },
  { id: 6, icon: CarFront, text: "Car Location", to: "/carlocation" },
  { id: 7, icon: Drumstick, text: "Beauty & Spa", to: "/beautyspa" },
  { id: 8, icon: Shrub, text: "Park", to: "/park" },
  { id: 9, icon: FerrisWheel, text: "museum", to: "/museum" },
  { id: 10, icon: WashingMachine, text: "Car wash", to: "/carwash" },
  { id: 11, icon: Beer, text: "Bars", to: "/bars" },
  { id: 12, icon: Dumbbell, text: "Gyms", to: "/gyms" },
];

const Navlinkcomponet = () => {
  return (
    <>
      <section>
        <Containerbox className={"max-w-[1345px]"}>
          <div className="grid gap-x-3 gap-y-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12">
            {NabLinkdata.map((res) => (
              <NavLink
                key={res.id}
                to={`${res.to}`}
                className={({ isActive }) =>
                  `font-normal text-center mx-auto text-base  space-y-2  ${
                    isActive ? "text-primary border-b-2 border-primary" : "text-secondary"
                  }`
                }
              >
                {<res.icon size={24} className="mx-auto" />}
                <span className="text-base capitalize">{res.text}</span>
              </NavLink>
            ))}
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Navlinkcomponet;
