import { useEffect, useState } from "react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";
import { Latestcart } from "../../ui/Latestcart";
import { Buttonbox } from "../../ui/Buttonbox";

const Homelatestcart = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [visiblecart, setvisiblecart] = useState(8);
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
        setdata(result.letestCartdata);
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
  const loadMoreCarts = () => {
    setvisiblecart(visiblecart + 8); // Load 4 more carts each time
  };

  const displayedCarts = data.slice(0, visiblecart);
  return (
    <>
      <section className="md:pt-20">
        <Containerbox>
          <Headingbox className={"text-3xl font-extrabold text-heading pb-6"}>
            The latest trends
          </Headingbox>
          <div className="grid gap-x-5 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {displayedCarts.map((res) => (
              <Latestcart key={res} {...res} />
            ))}
          </div>

          {visiblecart < data.length && (
            <div className="text-center py-12">
              <p className="text-xl pb-5 text-heading ">
                Discover more cool restaurants
              </p>
              <Buttonbox
                onClick={loadMoreCarts}
                className={"!font-normal text-lg font-rohoob"}
              >
                Show More
              </Buttonbox>
            </div>
          )}
        </Containerbox>
      </section>
    </>
  );
};

export default Homelatestcart;
