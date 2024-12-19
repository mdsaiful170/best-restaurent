import { ArrowLeft, ArrowRight, Grip } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";
import { Buttonbox } from "../../ui/Buttonbox";

const Gallery = () => {
  const [imgData, setimgdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [currentindex, setindex] = useState(0);
  const imgDatabox = imgData[currentindex];
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
        setimgdata(result.gallerydata);
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

  const preEle = () => {
    setindex((pre) => (pre === imgData.length - 1 ? 0 : pre + 1));
  };

  const nextEl = () => {
    setindex((next) => (next === 0 ? imgData.length - 1 : next - 1));
  };

  const handleClick = (index) => {
    setindex(index);
  };

  return (
    <>
      <section className="px-3 pt-32">
        <Containerbox className={"max-w-[1200px]"}>
          <Headingbox
            className={"text-3xl font-semibold text-heading font-lexend"}
          >
            Discover our magnificent place in photos
          </Headingbox>
          <p className="max-w-full pt-3 pb-10 md:max-w-lg text-base font-normal text-secondary font-rohoob">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.The lorem ipsum is, in printing.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 relative">
            {imgData.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.colspan === "col-span-2" ? "col-span-2" : "col-span-1"
                }   
                
                ${item.rowspan === "row-span-2" ? "row-span-2" : "row-span-1"}
                `}
              >
                <img
                  src={item.image}
                  className="max-w-full w-full h-full object-center"
                  alt=""
                />
              </div>
            ))}
            <Buttonbox
              onPress={onOpen}
              className={
                "bg-white absolute  bottom-4 left-5 z-10 text-textColor border border-secondary !px-4 font-rohoob text-base"
              }
            >
              <Grip className="inline-block text-textColor me-2" />
              View all photos (7)
            </Buttonbox>

            <Modal
              isOpen={isOpen}
              placement="top"
              onOpenChange={onOpenChange}
              backdrop="blur"
              size="2xl"
              className="bg-white/80 "
            >
              <ModalContent className="p-2">
                <ModalHeader className="flex flex-col gap-1"> </ModalHeader>
                <ModalBody className="px-0 py-0">
                  <div className="relative">
                    <img
                      className="w-full mx-auto rounded-xl object-cover h-auto"
                      src={imgDatabox.image}
                      alt=""
                    />
                    <div className="flex absolute bottom-16 left-1/2 transform -translate-x-1/2 items-center gap-x-1">
                      {imgData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleClick(index)}
                          className={`w-4 h-4 rounded-full  ${
                            index === currentindex ? "bg-white " : "bg-white/25"
                          }`}
                        ></button>
                      ))}
                    </div>

                    <button
                      onClick={nextEl}
                      className="grid bg-white place-items-center absolute left-5 bottom-16 size-10 rounded-full"
                    >
                      <ArrowLeft className="text-heading " size={26} />
                    </button>
                    <button
                      onClick={preEle}
                      className="absolute bg-white right-5 bottom-16 grid place-items-center size-10 rounded-full"
                    >
                      <ArrowRight className="text-heading " size={26} />
                    </button>
                  </div>

                  <div className="flex gap-x-3 pt-4">
                    {imgData.length > 0 &&
                      imgData.map((img, i) => (
                        <img
                          key={img.id}
                          onClick={() => setindex(i)}
                          src={img.image}
                          alt="img"
                          className="size-24 sm:size-28  md:size-[120px] cursor-pointer rounded-lg object-cover object-center"
                        />
                      ))}
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Gallery;
