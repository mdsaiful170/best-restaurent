import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";
import { Avtivitiecart } from "../../ui/Avtivitiecart";

const Homeactivites = () => {
  const [activitescartdata, setcartdata] = useState([]);
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
        setcartdata(result.avtivitiesData);
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
      <section className=" pt-16 md:pt-20">
        <Containerbox className={"relative"}>
          <Headingbox
            className={
              "text-3xl text-heading font-extrabold font-lexend pb-5 md:pb-6"
            }
          >
            Recents avtivities
          </Headingbox>
          <Swiper
            loop={true}
            spaceBetween={30}
            grabCursor={true}
            slidesPerView={3}
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1080: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="relative"
          >
            {activitescartdata.map((res) => (
              <SwiperSlide key={res.id}>
                <Avtivitiecart {...res} key={res.id} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute swiper-next z-50 bg-white/60 active:bg-white left-2  rounded-full p-2 lg:p-3 cursor-pointer top-[45%]">
            <ArrowLeft
              size={26}
              className="text-textColor font-extrabold  active:text-heading"
            />
          </div>
          <div className="absolute swiper-prev active:bg-white  z-50 bg-white/60  rounded-full p-2 lg:p-3 cursor-pointer right-2 top-[45%]">
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

export default Homeactivites;
