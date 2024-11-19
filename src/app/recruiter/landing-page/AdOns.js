import Image from "next/image";

// components/Footer.js
const AdOns = () => {
  // Example array of card objects
  const cardData = [
    {
      id: 1,
      title: "Career Page Integration",
      description:
        "Automatically sync your job listings to your career page and attract top talent effortlessly.",
      image: "/addons-pg-integration.svg", // Path to image
    },
    {
      id: 2,
      title: "WhatsApp Integration",
      description:
        "Automatically sync your job listings to your career page and attract top talent effortlessly.",
      image: "/whatsapp-red-icon.svg",
    },
    {
      id: 3,
      title: "Member Management",
      description:
        "Easily manage team members, roles, and permissions to streamline collaboration on hiring.",
      image: "/red-user-config.svg",
    },
    {
      id: 4,
      title: "Career Page Integration",
      description:
        "Automatically sync your job listings to your career page and attract top talent effortlessly.",
      image: "/addons-pg-integration.svg", // Path to image
    },
    {
      id: 5,
      title: "Career Page Integration",
      description:
        "Automatically sync your job listings to your career page and attract top talent effortlessly.",
      image: "/addons-pg-integration.svg", // Path to image
    },
    {
      id: 6,
      title: "Career Page Integration",
      description:
        "Automatically sync your job listings to your career page and attract top talent effortlessly.",
      image: "/addons-pg-integration.svg", // Path to image
    },
    // Add more cards as needed
  ];

  return (
    <div className="avenir-regular max-w-7xl mx-auto px-4 w-[100%] mb-[5.625rem]">
      <div className="pt-[5rem] pb-[3.75rem]">
        <div className="text-[2rem] font-extrabold text-center">
          Boost Your Hiring with{" "}
          <span className="text-theme-color">Add-Ons</span>
        </div>

        <div className="text-center text-[1rem] font-normal">
          Enhance your hiring with powerful tools and seamless integrations.
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-x-[2.5rem] gap-y-[2.5rem] mx-auto px-4">
        {cardData.map((card) => (
          <div key={card.id} className="p-5 add-ons-cards">
            <div className="bg-[#FDEBEF] w-[2.625rem] h-[2.625rem] mb-7 rounded-lg flex items-center justify-center content-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}` + card.image}
                alt="Logo"
                width={30}
                height={30}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="text-[1.125rem] font-extrabold leading-[1.7575rem] text-left text-[rgba(73,52,56,1)]">
              {card.title}
            </div>
            <div className="text-[0.875rem] font-normal text-left text-[rgba(75,81,98,1)]">
              {card.description}
            </div>
          </div>
        ))}
      </div>

      {/* pricing block */}
      <div className="pricing-block pricing-border-gradient rounded-[1.25rem] mt-[5.75rem]">
        <div className="flex flex-row flex-wrap content w-full p-x-[3.3125rem] p-[2.125rem] pr-[2.625rem]">
          <div className="flex-shrink-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}Clip path group.svg`}
              alt="Clip Path"
              width={102}
              height={102}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <div className="flex flex-col items-start ml-6">
            <div className="text-[1.5rem] text-theme-color font-extrabold leading-[2.343rem] mb-[0.5625rem]">
              Find the Right Plan for Your Hiring Needs
            </div>

            <div className="text-[1rem] font-normal items-start">
              <div>
                Explore flexible pricing options tailored to your recruitment
                process. Get{" "}
              </div>
              <div className="flex text-[#493438]">
                started with Hirewalks and hire smarter.
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center relative">
            <button className="bg-theme-color text-white px-[4.3125rem] py-[0.625rem] rounded-lg hover:bg-theme-color transition">
              View Pricing Plans
            </button>

            <div className="absolute right-[3rem] top-[-5rem]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}view-pricing.gif`}
                alt="Clip Path"
                width={180}
                height={131}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdOns;
