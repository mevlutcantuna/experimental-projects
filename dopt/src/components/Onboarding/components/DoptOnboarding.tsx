import { DoptProvider } from "@dopt/react";
import { useEffect, type ReactNode } from "react";
import { doptApiClient } from "../utils";
import DoptFlow from "./DoptFlow";

interface DoptProviderProps {
  children: ReactNode;
  flowVersions: { [key: string]: number };
  userId?: string;
}

const DoptOnboarding = ({
  children,
  flowVersions,
  userId = "example@gmail.com"
}: DoptProviderProps) => {
  const fullName = "Mevlut Can Tuna";

  useEffect(() => {
    doptApiClient.users
      .identifyUser({
        identifier: userId,
        properties: {
          email: userId,
          fullName
        }
      })
      .then(() => {
        console.log("User identified", userId);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <DoptProvider
      flowVersions={flowVersions}
      apiKey={import.meta.env.VITE_APP_DOPT_API_KEY}
      userId={userId}
    >
      {children}
      {Object.keys(flowVersions).map((flowId) => (
        <DoptFlow key={flowId} flowId={flowId} />
      ))}
    </DoptProvider>
  );
};

export default DoptOnboarding;
