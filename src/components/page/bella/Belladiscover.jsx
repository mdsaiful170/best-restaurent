import { useEffect, useState } from "react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";
import { Latestcart } from "../../ui/Latestcart";

const Belladiscover = () => {
  const [cartdata, setcartdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

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
        setcartdata(result.discoverCartdata);
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

  return (
    <>
      <section>
        <Containerbox className={"max-w-[1080px]"}>
          <Headingbox className={"text-2xl font-extrabold text-heading pb-10"}>
            Also discover...
          </Headingbox>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {cartdata.map((res) => (
              <Latestcart
                className2={"h-[213px] max-w-full"}
                key={res.id}
                {...res}
              />
            ))}
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Belladiscover;
