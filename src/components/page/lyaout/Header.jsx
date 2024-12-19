import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Globe, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Buttonbox } from "../../ui/Buttonbox";



const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStar, setSelectedStar] = useState(null);
  const [suggestion, setShowSuggestions] = useState(false);

  const [cartdata, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [isMenuopen, setMenuopen] = useState(false);
  const navigate = useNavigate();

  // Filter carts based on search term and star selection
  const filteredCarts = cartdata.filter((cart) => {
    const matchesSearch = cart.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStar = selectedStar ? cart.star === selectedStar : true;
    return matchesSearch && matchesStar;
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true); // Show suggestions when typing
  };
  // Filter suggestions based on search term
  const suggestions = cartdata.filter((cart) =>
    cart.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Navigate to results page with filtered carts
  const handleShowResults = () => {
    localStorage.setItem("filteredCarts", JSON.stringify(filteredCarts));
    navigate("/result");
  };

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await fetch("/lib/data.json");
      const resualt = await response.json();
      setdata(resualt.letestCartdata);
      setloading(false);
    } catch (error) {
      seterror(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <Navbar
        isBlurred={false}
        shouldHideOnScroll={false}
        maxWidth="xl"
        isMenuOpen={isMenuopen}
        onMenuOpenChange={isMenuopen}
        className="bg-white w-full items-center  border-b border-[#DCDCDC]  py-5 px-3 mx-auto  "
        isSticky
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <NavLink to={"/"}>
              <img
                src={"./logo.png"}
                className="max-w-[80%] md:max-w-full h-auto"
                alt=""
              />
            </NavLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center" className="hidden lg:flex">
          <form>
            <div className="flex flex-wrap items-center   divide-secondary divide-x-small gap-x-2 p-1 border h-11 border-secondary rounded-full">
              <div className="relative">
                <input
                  type="search"
                  placeholder="restaurant, hotel, service...."
                  value={searchTerm}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setShowSuggestions(false); // Hide suggestions on Enter
                    }
                  }}
                  className="outline-none px-2 
                  h-full bg-transparent text-lg text-secondary font-normal placeholder:text-secondary placeholder:text-base"
                />
                {suggestion && searchTerm && (
                  <ul className="absolute left-0 right-0 bg-white border rounded-md mt-2 max-h-48 overflow-auto shadow-lg z-10">
                    {suggestions.length > 0 ? (
                      suggestions.map((cart) => (
                        <li
                          key={cart.id}
                          className="p-2 hover:bg-primary/50 cursor-pointer"
                          onClick={() => {
                            setSearchTerm(cart.name);
                            setShowSuggestions(false); // Hide suggestions when clicked
                          }}
                        >
                          {cart.name}
                        </li>
                      ))
                    ) : (
                      <li className="p-2 text-secondary text-xl font-medium">
                        No matches found
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div>
                <select
                  className="outline-none ps-2 w-full   text-lg text-secondary selection:text-black "
                  value={selectedStar || ""}
                  onChange={(e) =>
                    setSelectedStar(
                      e.target.value ? parseInt(e.target.value) : null
                    )
                  }
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="text-secondary text-lg "
                  >
                    All Star...
                  </option>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {`${star} Star${star > 1 ? "s" : ""}`}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleShowResults}
                className="rounded-full py-2   bg-primary px-2 "
              >
                <Search size={18} className=" text-white " />
              </button>
            </div>
          </form>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Globe />
          </NavbarItem>
          <NavbarItem>
            <Buttonbox
              className={"text-base font-normal bg-heading text-white"}
            >
              MyFeedback for business
            </Buttonbox>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className=" lg:hidden">
          <NavbarItem
            className="cursor-pointer"
            onClick={() => setMenuopen((pre) => !pre)}
          >
            {isMenuopen ? <X /> : <Search />}
          </NavbarItem>
          <NavbarItem className="cursor-pointer">
            <Globe />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu
          className={`w-full bg-gray-50 mt-10 py-5 !h-auto z-10 !overflow-auto `}
          onAnimationIteration={true}
        >
          <form>
            <div className="flex  items-center   divide-secondary divide-x-small gap-x-2 p-1 border h-11 border-secondary rounded-full">
              <div className="relative flex-1">
                <input
                  type="search"
                  placeholder="restaurant, hotel, service...."
                  value={searchTerm}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setShowSuggestions(false); // Hide suggestions on Enter
                    }
                  }}
                  className="outline-none px-2  h-full bg-transparent text-lg text-secondary font-normal placeholder:text-secondary placeholder:text-base"
                />
                {suggestion && searchTerm && (
                  <ul className="absolute left-0 right-0 bg-white border rounded-md mt-2 max-h-48 overflow-auto shadow-lg z-10">
                    {suggestions.length > 0 ? (
                      suggestions.map((cart) => (
                        <li
                          key={cart.id}
                          className="p-2 hover:bg-primary/50 cursor-pointer"
                          onClick={() => {
                            setSearchTerm(cart.name);
                            setShowSuggestions(false); // Hide suggestions when clicked
                          }}
                        >
                          {cart.name}
                        </li>
                      ))
                    ) : (
                      <li className="p-2 text-secondary text-xl font-medium">
                        No matches found
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div>
                <select
                  className="outline-none ps-2 w-full   text-lg text-secondary selection:text-black "
                  value={selectedStar || ""}
                  onChange={(e) =>
                    setSelectedStar(
                      e.target.value ? parseInt(e.target.value) : null
                    )
                  }
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="text-secondary text-lg "
                  >
                    All Satr..
                  </option>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {`${star} Star${star > 1 ? "s" : ""}`}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => {
                  navigate("/result", { state: { filteredCarts } });
                  setMenuopen(false);
                }}
                className="rounded-full py-2 bg-primary px-2"
              >
                <Search size={18} className="text-white" />
              </button>
            </div>
          </form>
          <Buttonbox
            className={
              "text-base  mx-auto mt-5 font-normal bg-heading text-white"
            }
          >
            MyFeedback for business
          </Buttonbox>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
