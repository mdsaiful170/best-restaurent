import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";
import { Carusol } from "../../ui/Carusol";

const Homecarusole = () => {
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
        setcartdata(result.homeCardCarusole);
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
        <Containerbox className={" bg-primary p-5 rounded-xl relative "}>
          <Headingbox className={"text-white text-[32px] pb-6"}>
            Find the best restaurant ratings below
          </Headingbox>
          <Swiper
            loop={true}
            spaceBetween={24}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
            speed={300}
            freeMode={true}
            breakpoints={{
              0: {
                slidesPerView: 0,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1080: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="relative"
          >
            {cartdata.map((res) => (
              <SwiperSlide key={res.id}>
                <Carusol {...res} />
              </SwiperSlide>
            ))}

            <div className="mt-14">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>

          <div className="absolute swiper-next z-10 bg-white/60 active:bg-white left-2 top-1/2  rounded-full p-2 lg:p-3 cursor-pointer placeholder:top-[45%]">
            <ArrowLeft
              size={26}
              className="text-textColor font-extrabold  active:text-heading"
            />
          </div>
          <div className="absolute swiper-prev active:bg-white  z-10 bg-white/60 top-1/2  rounded-full p-2 lg:p-3 cursor-pointer right-2 placeholder:top-[45%]">
            <ArrowRight
              size={26}
              className="text-textColor font-extrabold  active:text-heading"
            />
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Homecarusole;
