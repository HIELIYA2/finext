"use client"

import Image from "next/image";
import React from "react";

export default function Home() {
  const [initialAmount, setInitialAmount] = React.useState(5000);
  const [contribution, setContribution] = React.useState(150);
  const [period, setPeriod] = React.useState("Monthly");
  const [rateOfReturn, setRateOfReturn] = React.useState(4);
  const [yearsOfGrowth, setYearsOfGrowth] = React.useState(10);

  const handleInitialAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInitialAmount(Number(e.target.value));

  const handleContributionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContribution(Number(e.target.value));

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setPeriod(e.target.value);

  const handleRateOfReturnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRateOfReturn(Number(e.target.value));

  const handleYearsOfGrowthChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYearsOfGrowth(Number(e.target.value));

  return (
    <div className="container mx-auto flex gap-4">
      <div className="flex flex-col gap-4 p-4  w-[30%]">
        <label className="flex flex-col">
          Initial Amount
          <input
            type="number"
            value={initialAmount}
            onChange={handleInitialAmountChange}
            step={100}
            className="border p-2 w-full"
            style={{ textAlign: "center" }}
          />
        </label>
        <label className="flex flex-col">
          Contributions
          <input
            type="number"
            value={contribution}
            onChange={handleContributionChange}
            step={50}
            className="border p-2 w-full"
            style={{ textAlign: "center" }}
          />
        </label>
        <div className="flex gap-2 p-2">
          <button
            className={`py-1 px-2 rounded ${
              period === "Monthly" ? "bg-zinc-300" : ""
            }`}
            onClick={() => setPeriod("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`py-1 px-2 rounded ${
              period === "Annually" ? "bg-zinc-300" : ""
            }`}
            onClick={() => setPeriod("Annually")}
          >
            Annually
          </button>
        </div>
        <label className="flex flex-col">
          Rate of Return
          <input
            type="number"
            value={rateOfReturn}
            onChange={handleRateOfReturnChange}
            step={0.25}
            className="border p-2 w-full text-center"
            style={{ textAlign: "center" }}
          />
        </label>
        <label className="flex flex-col">
          Years of Growth
          <input
            type="number"
            value={yearsOfGrowth}
            onChange={handleYearsOfGrowthChange}
            className="border p-2 w-full"
            style={{ textAlign: "center" }}
          />
        </label>
      </div>
      <div className="bg-red-500 flex-1 w-[70%] p-4"></div>
    </div>
  );
}
