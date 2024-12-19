import { Progress } from "@nextui-org/react";
import { Containerbox } from "../../ui/Containerbox";
import { Headingbox } from "../../ui/Headingbox";



const progressBar = [
  { id: 1, value: 100, star: "satrs 5" },
  { id: 2, value: 80, star: "satrs 4" },
  { id: 3, value: 65, star: "satrs 3" },
  { id: 1, value: 30, star: "satrs 2" },
  { id: 1, value: 10, star: "satrs 0" },
];
const Bellarating = () => {
  return (
    <>
      <section >
        <Containerbox className={"max-w-[1180px] border-y border-secondary/25 py-10"}>
          <div className="grid gap-6 grid-cols-1  md:grid-cols-3 ">
            <div className="flex items-start gap-x-3  md:place-self-end md:self-start ">
              <img src="./rating-logo.png" alt="" />
              <div>
                <Headingbox
                  className={"font-rohoob text-3xl font-bold text-heading"}
                >
                  Overall rating
                </Headingbox>
                <p className="text-lg font-normal font-rohoob  text-secondary">
                  834 Reviews
                </p>
                <div className="pt-8">
                  {Array.from(Array(5).keys()).map((el) => (
                    <img
                      src="./yellow-star.svg"
                      className="w-fit h-auto inline-block mx-[2px]"
                      alt=""
                      key={el}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2">
              {progressBar.map((res) => (
                <div key={res.id} className="flex  items-center mb-2  gap-x-2">
                  <p className="text-lg text-nowrap font-rohoob text-[#484848]">
                    {res.star}
                  </p>

                  <Progress aria-label="Loading..." value={res.value} />
                </div>
              ))}
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Bellarating;
