"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    initialAmount: 5000,
    contribution: 150,
    period: "Monthly",
    rateOfReturn: 4,
    yearsOfGrowth: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePeriodChange = (period: "Monthly" | "Annually") => {
    setForm({
      ...form,
      period,
    });
  };

  return (
    <div className="container mx-auto flex gap-4">
      <div className="flex flex-col gap-4 p-4  w-[30%]">
        <label className="flex flex-col">
          Compounding frequency
          <div className="border p-2 w-full flex gap-2">
            <button
              className={`py-1 px-2 rounded ${
                form.period === "Monthly" ? "bg-zinc-300" : ""
              }`}
              onClick={() => handlePeriodChange("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-2 rounded ${
                form.period === "Annually" ? "bg-zinc-300" : ""
              }`}
              onClick={() => handlePeriodChange("Annually")}
            >
              Annually
            </button>
          </div>
        </label>

        <label className="flex flex-col">
          Initial Amount
          <div className="relative">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400">
              $
            </div>
            <input
              name="initialAmount"
              type="number"
              value={form.initialAmount}
              onChange={handleChange}
              step={100}
              className="border p-2 w-full pl-6"
            />
          </div>
        </label>
        <label className="flex flex-col">
          Contributions
          <div className="relative">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400">
              $
            </div>
            <input
              name="contribution"
              type="number"
              value={form.contribution}
              onChange={handleChange}
              step={50}
              className="border p-2 w-full pl-6"
            />
          </div>
        </label>

        <label className="flex flex-col">
          Rate of Return
          <div className="relative">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400">
              %
            </div>
            <input
              name="rateOfReturn"
              type="number"
              value={form.rateOfReturn}
              onChange={handleChange}
              step={0.25}
              className="border p-2 w-full pl-6"
            />
          </div>
        </label>
        <label className="flex flex-col">
          Years of Growth
          <input
            name="yearsOfGrowth"
            type="number"
            value={form.yearsOfGrowth}
            onChange={handleChange}
              className="border p-2 w-full pl-6"
          />
        </label>
      </div>
      <div className="bg-red-500 flex-1 w-[70%] p-4"></div>
    </div>
  );
}
