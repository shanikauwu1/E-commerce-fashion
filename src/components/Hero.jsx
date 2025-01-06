import { Link } from "react-router-dom";
import womenImg from "../assets/woman_hero.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-pink-100 bg-hero bg-no-repeat bg-cover pt-24 flex items-center ">
      <div className="container mx-auto flex justify-around ">
        <div className="flex flex-col justify-center">
          {/* text */}
          <div className="font-semibold flex items-center">
            <div className="w-10 h-[2px] bg-red-600 mr-3"></div>
            <div>New Trend</div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 uppercase">
            Autumn sale Stylish <br />
            <span className="font-semibold">Womens</span>
          </h1>
          <Link
            to={"/"}
            className="uppercase self-start font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={womenImg} alt="new autumn styles" />{" "}
        </div>
      </div>
    </section>
  );
};

export default Hero;
