import HeroSection from "./components/HeroSection";

function HomeScreen() {
  return (
    <div className="flex flex-col justify-center w-full px-3 sm:px-6 md:px-20 bg-white gap-y-2.5 sm:gap-y-10">
      {/* Hero Section */}
      <HeroSection />

      {/* AI detail */}
      {/* <TimelineDetail title="AI-First" data={DATA_AI} /> */}

      {/* Feature */}

      {/* <div className="flex flex-col text-center w-full">
        <Features title="customer_support" type="CUSTOMER_SUPPORT" />
      </div> */}
      {/* Feature */}

      {/* <div className="flex flex-col text-center w-full">
        <Features title="work_efficiency" type="WORK_EFFICIENCY" />
      </div> */}
      {/* Feature */}

      {/* <div className="flex flex-col text-center w-full">
        <Features title="report_leadership" type="REPORT_LEADERSHIP" />
      </div> */}

      {/* AI detail */}
      {/* <TimelineDetail title="Privacy-First" type_reverse data={DATA_PRIVACY} /> */}

      {/* Manage - download */}
      {/* <ManageBusiness /> */}

      {/* solve problem */}

      {/* <Solution /> */}

      {/* partner */}
      {/* <ClientsComponent /> */}
    </div>
  );
}

export default HomeScreen;
