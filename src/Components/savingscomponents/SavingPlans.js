import { useState } from "react";
import SPContainer from "./SPContainer";

const SavingPlans = () => {
  const [SPDetails, setSPDetails] = useState([
    {
      type: "Monthly Deposit",
      description: "Add monthly deposits to your savings, for secure future",
      href: "/",
    },
    {
      type: "Fixed Deposit",
      description: "Add fixed deposits to your savings, for secure future",
      href: "/",
    },
  ]);
  return (
    <div className="w-[100%] h-[80vh] mt-11 gap-3 flex justify-center items-center bg-slate-900">
      {SPDetails.map((a) => {
        return <SPContainer details={a} />;
      })}
    </div>
  );
};

export default SavingPlans;