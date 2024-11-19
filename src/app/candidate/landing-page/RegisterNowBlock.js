import {
    HrInterviewIcon,
  ResponseMessage,
  RightWhiteArrow,
  VerifiedJobs,
} from "@/components/icons/candidate-landing";

export default function RegisterNowBlock() {
  return (
    <div className="max-w-5xl mx-auto flex justify-between items-center   ">
      <div
        className="w-[28.313rem] p-[1.875rem] register-now-card rounded-lg bg-[url('/handshake.svg')]"
        style={{ backgroundColor: "white" }}
      >
        <div className="text-left text-[1.25rem] leading-[1.931rem] text-[#493438]">
          Trusted by Millions to Land the Perfect Job – Join India&apos;s
          Fastest-Growing Career Network!
        </div>

        <button className="py-[0.5rem] px-[1rem] rounded-lg bg-theme-color text-white text-[0.75rem] font-bold flex items-center justify-center mt-[1.563rem]">
          <div className="flex flex-row gap-[0.5rem] items-center">
            <div>Register Now</div>
            <div>
              <RightWhiteArrow />
            </div>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-[2rem]">
        <div className="flex flex-col items-center">
          <VerifiedJobs />

          <div className="text-[1rem] leading-[1.562rem] font-extrabold text-[#493438] mt-[0.75rem]">
            100 % FREE &<br /> Verified Jobs
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ResponseMessage />

          <div className="text-[1rem] leading-[1.562rem] font-extrabold text-[#493438] mt-[0.75rem]">
            Quick response from
            <br /> the Recruiter
          </div>
        </div>

        <div className="flex flex-col items-center">
          <HrInterviewIcon />

          <div className="text-[1rem] leading-[1.562rem] font-extrabold text-[#493438] mt-[0.75rem]">
            Direct calls with HR
            <br /> for interview
          </div>
        </div>
      </div>
    </div>
  );
}
