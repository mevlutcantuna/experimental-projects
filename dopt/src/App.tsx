import Applications from "./components/Applications";
import DoptOnboarding from "./components/Onboarding/components/DoptOnboarding";
import Sidebar from "./components/Sidebar";

function App() {
  const email = "mttuna90@gmail.com";

  return (
    <DoptOnboarding
      flowVersions={{
        "experimental-app": 2
      }}
      userId={email}
    >
      <div className="flex p-8 w-full bg-gray-300 h-full min-h-screen">
        <div className="max-w-[1194px] flex w-full gap-12 mx-auto">
          <Sidebar />
          <Applications />
        </div>
      </div>
    </DoptOnboarding>
  );
}

export default App;
