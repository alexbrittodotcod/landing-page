import "../../styles/globals.scss";
import { Button } from "@/components/ui/button";

// components/Footer.js
const LandingPgKeyFeatures = () => {
  return (
    <div>
      <div className="pt-[5rem] pb-[3.75rem]">
        <div className="text-[2rem] font-extrabold text-center">
          Explore Our <span className="text-theme-color">Key Features</span>
        </div>

        <div className="text-center text-[1rem] font-normal">
          Learn how our AI-driven solutions make hiring faster and smarter.
        </div>
      </div>

      <Button>Click me</Button>
    </div>
  );
};

export default LandingPgKeyFeatures;
