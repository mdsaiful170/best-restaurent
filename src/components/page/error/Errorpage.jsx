import { useNavigate } from "react-router-dom";
import { Containerbox } from "../../ui/Containerbox";
import { Buttonbox } from "../../ui/Buttonbox";


const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <Containerbox>
          <div className=" max-w-ful md:max-w-lg text-center mx-auto">
            <h1 className="text-6xl font-bold text-heading py-2">Error 404</h1>
            <p className="text-lg font-medium text-heading pb-2">
              The page youre looking for doesnt exist.
            </p>
            <Buttonbox onClick={() => navigate("/")}>back Home</Buttonbox>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Errorpage;
