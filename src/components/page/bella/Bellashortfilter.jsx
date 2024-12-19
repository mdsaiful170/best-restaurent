import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import { useEffect, useState } from "react";
import { ArrowUpDown, Download } from "lucide-react";
import { Buttonbox } from "../../ui/Buttonbox";
import { Headingbox } from "../../ui/Headingbox";
import { Bellacart } from "../../ui/Bellacart";
import { Containerbox } from "../../ui/Containerbox";

const Bellashortfilter = () => {
  const [carts, setcartdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedCarts, setSortedCarts] = useState([...carts]);
  const [selectedStar, setSelectedStar] = useState(null);
  const [suggestion, setShowSuggestions] = useState(false);
  const [visiblecart, setvisiblecart] = useState(6);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const fetchdata = () => {
    setloading(true);
    fetch("/lib/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setcartdata(result.belladata);
        setSortedCarts(result.belladata);
      })
      .catch((error) => {
        seterror(error);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true); // Show suggestions when typing
  };

  // Filter carts based on search term and star selection
  const filteredCarts = sortedCarts.filter((cart) => {
    const matchesSearch = cart.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStar = selectedStar ? cart.stars === selectedStar : true;
    return matchesSearch && matchesStar;
  });

  // Filter cart names for suggestions
  const cartNameSuggestions = carts.filter((cart) =>
    cart.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort by stars
  const sortCarts = (type) => {
    let sorted = [...sortedCarts];
    if (type === "smallToHigh") {
      sorted.sort((a, b) => a.stars - b.stars);
    } else if (type === "highToSmall") {
      sorted.sort((a, b) => b.stars - a.stars);
    } else {
      sorted = [...carts]; // Default sorting
    }
    setSortedCarts(sorted); // Hide menu after selection
  };

  const loadMoreCarts = () => {
    setvisiblecart(visiblecart + 6); // Load 6 more carts each time
  };
  const displayedCarts = filteredCarts.slice(0, visiblecart);

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = "./menu-img.jpeg";
    link.download = "menu-img.jpeg";
    link.click();
  };

  if (loading) {
    return (
      <p className="text-center text-textColor text-base font-bold py-2">
        Loading...
      </p>
    );
  }
  if (error) {
    return (
      <p className="text-center text-textColor text-base font-bold py-2">
        {error.message}
      </p>
    );
  }

  return (
    <>
      <section>
        <Containerbox className={"max-w-[1040px]"}>
          <div className="max-w-full w-full md:max-w-xl flex items-center gap-x-4">
            <div className="relative max-w-full w-full">
              <input
                type="text"
                placeholder="Search carts..."
                className="w-full p-1 rounded text-secondary placeholder:font-normal outline-none px-3 text-lg font-rohoob font-normal  border border-[#5E5E5E]/50 shadow-sm "
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // Prevent the default behavior (form submission or losing focus)
                    e.preventDefault();
                    setShowSuggestions(false);
                  }
                }}
              />

              {suggestion && searchTerm && (
                <div className="absolute bg-white text-secondary text-lg font-normal font-rohoob shadow-sm border   rounded-md w-full max-h-48 overflow-y-auto mt-1 z-10">
                  {cartNameSuggestions.map((cart) => (
                    <div
                      key={cart.id}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        setSearchTerm(cart.name); // Set selected cart name
                        setShowSuggestions(false); // Update selected cart
                      }}
                    >
                      {cart.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <select
              className="w-1/2 md:w-1/3 outline-none border  text-secondary border-[#5E5E5E]/50 shadow-sm rounded px-3 py-[7px] md:py-2 "
              value={selectedStar || ""}
              onChange={(e) =>
                setSelectedStar(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
            >
              <option value="">All Stars</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {`${star} Star${star > 1 ? "s" : ""}`}
                </option>
              ))}
            </select>
            <Dropdown>
              <DropdownTrigger className="text-secondary font-medium">
                <Button
                  variant="bordered"
                  className="border w-1/2 md:w-1/3 py-3 md:py-1 h-10  !px-0 hover:!opacity-100 text-base font-medium font-rohoob text-[#5E5E5E] border-[#5E5E5E]/50 shadow-sm "
                  radius="full"
                  size="sm"
                >
                  <ArrowUpDown size={19} className="text-[#5E5E5E]" /> Short
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                color="primary"
                className="font-bold"
              >
                <DropdownItem
                  key="smallhight"
                  onClick={() => sortCarts("smallToHigh")}
                  className="group/box"
                >
                  {" "}
                  <span className="text-sm font-medium text-[#5E5E5E] group-hover/box:text-white">
                    Small to High
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="highsmall"
                  onClick={() => sortCarts("highToSmall")}
                  className="group/box"
                >
                  {" "}
                  <span className="text-sm font-medium text-[#5E5E5E] group-hover/box:text-white">
                    High to Small
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="default"
                  onClick={() => sortCarts("default")}
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
          <Buttonbox onPress={onOpen} className="max-w-full rounded-md mt-3">
            Our Menu
          </Buttonbox>
          <div>
            <Modal
              isOpen={isOpen}
              placement="center"
              onOpenChange={onOpenChange}
              backdrop="blur"
              size="2xl"
              className="bg-white/80 "
            >
              <ModalContent className="px-0 py-0">
                <ModalHeader className="flex flex-col gap-1"> </ModalHeader>
                <ModalBody className="px-2">
                  <img
                    src="./menu-img.jpeg"
                    className="block mx-auto rounded-xl shadow-md object-cover h-auto "
                    alt="img"
                  />
                  <Headingbox
                    className={
                      "text-3xl  font-lexend font-semibold  text-center text-heading"
                    }
                  >
                    Menu Bella Italia
                  </Headingbox>
                  <Buttonbox
                    onPress={handleDownloadImage}
                    className={
                      "bg-transparent border border-primary  mx-auto text-primary font-lexend py-2"
                    }
                  >
                    <Download size={16} className="text-primary inline-block" />
                    Dowload this menu
                  </Buttonbox>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>

          <div className="grid grid-cols-1 pt-16  place-self-start self-start">
            {displayedCarts.length > 0 ? (
              displayedCarts.map((cart) => (
                <Bellacart className={"mb-6"} key={cart.id} {...cart} />
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
              className={
                " block mx-auto  !font-normal text-sm  mt-5 font-rohoob"
              }
            >
              Show More
            </Buttonbox>
          )}
        </Containerbox>
      </section>
    </>
  );
};

export default Bellashortfilter;
