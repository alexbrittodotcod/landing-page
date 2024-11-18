import {
  ResumeCheckCharacter,
  ResumeCheckerDomain,
  CheckboxCircle,
} from "@/components/icons/candidate-landing";
import DropZone from "./DropZone";
import ResumeStrength from "./ResumeStrength";
import "../../../styles/landing-page.scss";

export default function ResumeScore() {
  const score = 50;
  const color = score > 80 ? "#FF4560" : "#00C49F";
  const resumeScorePoints = [
    { name: "Format Checking" },
    { name: "Format Checking" },
    { name: "Skills Suggestion" },
    { name: "Skills Suggestion" },
  ];

  return (
    <div className="max-w-7xl mx-auto grid justify-items-center">
      <div className="text-[2.5rem] text-[#493438] font-extrabold leading-[3.5rem] text-center xl:whitespace-normal whitespace-nowrap lg:text-[2rem]">
        Get Your <span className="text-theme-color">Resume Score</span> Now!
      </div>

      <div className="text-[#493438] text-base font-normal leading-[1.545rem]">
        Upload your resume and you’ll get a personalized score
      </div>

      <div className="grid grid-flow-col lg:grid-flow-row lg:pl-[0px] mt-[5rem] items-start gap-[6.938rem] xl:gap-[1rem]">
        {/* Upload resume block */}
        <div className="grid justify-items-center h-[100%]">
          <ResumeCheckCharacter />
          <div className="mt-[-1.188rem] bg-white">
            <DropZone />
          </div>
        </div>

        <div className="candidate-resume-checker-box-shadow bg-white resume-checker-box">
          <div className="grid grid-flow-row justify-items-center py-[1.031rem] pl-[0.925rem] pr-[3.063rem]">
            <ResumeCheckerDomain />
            {/* <input
              type="text"
              placeholder="www.hirewalks/Resume Checker"
              class="bg-white placeholder-[#C2C3C6] !border-transparent text-black border border-gray-300 rounded px-4 py-2" disabled
            /> */}
            <ResumeStrength score={score} />

            <div className="mt-[1.016rem]">
              <div className="text-[1.249rem] font-extrabold text-theme-color leading-[1.951rem]">
                Good Score!
              </div>
              <div className="text-[0.936rem] text-[#4B5162] leading-[1.447rem]">
                RESUME STRENGTH
              </div>
            </div>

            <div>
              <div className="text-[#4B5162] text-[1.125rem] leading-[1.738rem] mt-[1.621rem]">
                Upload your Resume to Check the Scores 😚
              </div>

              <div className="grid grid-cols-2 gap-x-[2.75rem] gap-y-4 mt-[1.063rem] w-fit">
                {resumeScorePoints.map((item, index) => {
                  return (
                    <div className="flex items-center space-x-[4px]" key={index}>
                      <CheckboxCircle />
                      <div className="text-[#4B5162] text-sm leading-[1.352rem] font-normal">
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
