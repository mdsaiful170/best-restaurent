import { useEffect, useState } from "react";
import { ChevronDown, Copyright } from "lucide-react";
import { Containerbox } from "../../ui/Containerbox";


const Footer = () => {
  const [footerData, setcartdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const fetchdata = async () => {
    try {
      setloading(true);
      const response = await fetch("/lib/data.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch data ${response.status}`);
      }
      const resualt = await response.json();
      setcartdata(resualt.footerData);
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
    }
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
      <section className="py-10 mt-6 bg-white border-t border-secondary/20">
        <Containerbox className={"max-w-[991px] mx-auto"}>
          <div className={"grid grid-cols-2 sm:grid-cols-3 gap-5 items-start npm place-items-center "}>
            {footerData?.length &&
              footerData?.map((item) => (
                <div key={item.id}>
                  <h3 className="text-heading font-lexend font-extrabold text-xl">
                    {item.name}
                  </h3>
                  <ul>
                    {item.navitem?.length &&
                      item.navitem?.map((navitem, i) => (
                        <li
                          key={i}
                          className="text-sm font-normal font-rohoob text-[#5E5E5E] pt-3 hover:text-primary transition duration-150 ease-linear"
                        >
                          <a href="#">{navitem}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}

            <div>
              <h3 className="text-heading font-lexend font-extrabold text-xl">
                Languages
              </h3>
              <p className="text-sm flex items-center gap-x-1 cursor-pointer hover:text-primary transition duration-150 ease-linear font-normal text-[#5E5E5E] pt-3">
                English <ChevronDown size={20} />{" "}
              </p>
              <br />
              <h3 className="text-heading font-lexend font-extrabold text-xl">
                Countries
              </h3>
              <p className="text-sm flex items-center gap-x-1 cursor-pointer hover:text-primary transition duration-150 ease-linear font-normal text-[#5E5E5E] pt-3">
                Singapour <ChevronDown size={20} />{" "}
              </p>
            </div>
          </div>

          <div className="text-center pt-10 pb-4">
            <p className="font-semibold text-sm text-heading text-wrap">
              Copyright <Copyright className="inline-block" size={16} /> Septembre{" "}
              {new Date().getUTCFullYear().toLocaleString()} myfeedback,
              designed by scott
            </p>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Footer;
