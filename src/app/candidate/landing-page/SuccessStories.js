import Testimonials from "./Testimonials";

export default function SuccessStories() {
  return (
    <div className="avenir-regular max-w-7xl mx-auto px-4 w-[100%] mb-[5.625rem]">
      <div className="pt-[5rem] pb-[3.75rem]">
        <div className="text-[2rem] font-extrabold text-center">
          Success Stories from{" "}
          <span className="text-theme-color">Hirewalks</span>
        </div>

        <div className="text-center text-[1rem] font-normal">
          Real feedback from candidates finding their dream jobs
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
