import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpDown } from "lucide-react";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Containerbox } from "../../ui/Containerbox";
import { Latestcart } from "../../ui/Latestcart";
import { Buttonbox } from "../../ui/Buttonbox";


const Resultcart = () => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("default");
  const [filteredCarts, setFilteredCarts] = useState([]);
  const [visiblecart, setvisiblecart] = useState(6);
  useEffect(() => {
    // Retrieve data from localStorage
    const storedCarts = JSON.parse(localStorage.getItem("filteredCarts")) || [];
    setFilteredCarts(storedCarts);
  }, []);
  // Create a sorted copy of the filtered carts
  const sortedCarts = [...filteredCarts].sort((a, b) => {
    if (sortType === "smallToHigh") return a.star - b.star;
    if (sortType === "highToSmall") return b.star - a.star;
    return 0; // Default order (unsorted)
  });

  const loadMoreCarts = () => {
    setvisiblecart(visiblecart + 8); // Load 4 more carts each time
  };

  const displayedCarts = sortedCarts.slice(0, visiblecart);
  return (
    <>
      <section className="px-3 md:px-0 ">
        <Containerbox className={"px-0 ps-4 max-w-full"}>
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
              to={"/result"}
            >
              All Restaurant
            </NavLink>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="flex  items-center gap-x-4 pb-6">
                <h3 className="text-3xl font-extrabold text-heading font-lexend">
                  best restaurants in singapore
                </h3>
                <Dropdown>
                  <DropdownTrigger className="text-secondary font-medium">
                    <Button
                      variant="bordered"
                      className="border hover:!opacity-100 text-base font-medium font-rohoob text-[#5E5E5E] border-[#5E5E5E]"
                      radius="full"
                      size="sm"
                      startContent={
                        <ArrowUpDown size={19} className="text-[#5E5E5E]" />
                      }
                    >
                      Short
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    color="primary"
                    className="font-bold"
                  >
                    <DropdownItem
                      key="smallhight"
                      onClick={() => setSortType("smallToHigh")}
                      className="group/box"
                    >
                      {" "}
                      <span className="text-sm font-medium text-[#5E5E5E] group-hover/box:text-white">
                        Small to High
                      </span>
                    </DropdownItem>
                    <DropdownItem
                      key="highsmall"
                      onClick={() => setSortType("highToSmall")}
                      className="group/box"
                    >
                      {" "}
                      <span className="text-sm font-medium text-[#5E5E5E] group-hover/box:text-white">
                        High to Small
                      </span>
                    </DropdownItem>
                    <DropdownItem
                      key="default"
                      onClick={() => setSortType("default")}
                      className="group/box"
                    >
                      {" "}
                      <span className="text-sm font-medium text-[#5E5E5E] group-hover/box:text-white">
                        Default
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="flex flex-col gap-y-6">
                {displayedCarts.length > 0 ? (
                  displayedCarts.map((cart) => (
                    <Latestcart
                      className2={"w-full  object-cover h-[230px] sm:h-auto"}
                      postion={"left-"}
                      link={"/bella"}
                      className={
                        "flex flex-grow-0 flex-col sm:flex-row  items-center"
                      }
                      key={cart.id}
                      {...cart}
                    />
                  ))
                ) : (
                  <p className="text-xl font-medium text-textColor font-rohoob">
                    No results found.
                  </p>
                )}
              </div>
              {visiblecart < sortedCarts.length && (
                <Buttonbox
                  onClick={loadMoreCarts}
                  className={"!font-normal text-sm !px-5 mt-5 font-rohoob"}
                >
                  Show More
                </Buttonbox>
              )}
            </div>
            <div>
              <img
                src="map-img.png"
                className="object-cover max-w-full h-auto"
                alt=""
              />
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Resultcart;
