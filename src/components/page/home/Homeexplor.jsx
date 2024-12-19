import { Buttonbox } from "../../ui/Buttonbox";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";



const Homeexplor = () => {
  return (
    <>
      <section className="bg-[#F2F2F2] py-8 mt-8 md:mt-10">
        <Containerbox className={"max-w-[1040px]"}>
          <div className="flex flex-col sm:flex-row mx-auto items-center gap-8">
            <div className="w-full md:w-1/2 mx-auto">
              <Headingbox
                className={"font-extrabold font-lexend text-2xl pb-4 md:pb-6"}
              >
                MyFeedback for Business has resources to help you plan, start,
                grow, and advertise your small business
              </Headingbox>
              <p className="text-base font-normal pb-9 md:pb-12">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>

              <Buttonbox className={"bg-heading text-white"}>
                Explore MyFeedback business
              </Buttonbox>
            </div>
            <div className="max-auto w-full sm:w-1/2">
              <img
                src="./explor-img.jpeg"
                className="max-w-full h-auto object-cover  rounded-3xl shadow-md"
                alt="img"
              />
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Homeexplor;
