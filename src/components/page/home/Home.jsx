import Homeactivites from "./Homeactivites";
import Homecarusole from "./Homecarusole";
import Homeexplor from "./Homeexplor";
import Homelatestcart from "./Homelatestcart";
import Navlinkcomponet from "./Navlinkcomponet";


const Home = () => {
  return (
    <div>
      <Navlinkcomponet />
      <Homecarusole />
      <Homelatestcart />
      <Homeexplor />
      <Homeactivites />
    </div>
  );
};

export default Home;
