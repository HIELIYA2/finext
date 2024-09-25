"use client";

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

  const calculateCompoundInterest = () => {
    const { initialAmount, contribution, period, rateOfReturn, yearsOfGrowth } =
      form;

    // Convert rate from percentage to decimal
    const r = rateOfReturn / 100;

    // Determine the compounding period
    let n;
    switch (period) {
      case "Monthly":
        n = 12;
        break;
      case "Quarterly":
        n = 4;
        break;
      case "Annually":
        n = 1;
        break;
      default:
        n = 12;
    }

    const P = initialAmount;
    const PMT = contribution;
    const t = yearsOfGrowth;

    // Formula for compound interest with periodic contributions
    const futureValue =
      P * Math.pow(1 + r / n, n * t) + // Future value of the initial investment
      PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n)); // Future value of contributions

    // Calculate total contributions
    const totalContributions = PMT * (n * t);

    // Calculate total interest earned
    const totalInterestEarned = futureValue - P - totalContributions;

    // Create an object with the result per year
    const result = { got: {}, futureValue: futureValue.toFixed(0) };
    for (let i = 1; i <= t; i++) {
      const year = i;
      const yearFutureValue =
        P * Math.pow(1 + r / n, n * year) + // Future value of the initial investment
        PMT * ((Math.pow(1 + r / n, n * year) - 1) / (r / n)); // Future value of contributions
      const yearContributions = PMT * (n * year);
      const yearInterestEarned = yearFutureValue - P - yearContributions;

      result.got[year] = {
        year,
        initialAmount: P,
        totalContributions: yearContributions.toFixed(0),
        totalInterestEarned: yearInterestEarned.toFixed(0),
        futureValue: yearFutureValue.toFixed(0),
      };
    }

    return result;
  };

  return (
    <div className="container mx-auto flex gap-4">
      <div className="flex flex-col gap-4 p-4  w-[30%]">
        <label className="flex flex-col ">
          Compounding frequency
          <div className="border p-1 w-full flex gap-1 text-center">
            <div className="flex items-center flex-1">
              <input
                type="radio"
                name="period"
                value="Monthly"
                checked={form.period === "Monthly"}
                onChange={handleChange}
                className="hidden"
                id="monthly"
              />
              <label
                htmlFor="monthly"
                className={`py-1 px-2 rounded text-s flex-1 ${
                  form.period === "Monthly" ? "bg-zinc-300" : ""
                }`}
              >
                Monthly
              </label>
            </div>
            <div className="flex items-center flex-1">
              <input
                type="radio"
                name="period"
                value="Annually"
                checked={form.period === "Annually"}
                onChange={handleChange}
                className="hidden"
                id="annually"
              />
              <label
                htmlFor="annually"
                className={`py-1 px-2 rounded text-s flex-1 ${
                  form.period === "Annually" ? "bg-zinc-300" : ""
                }`}
              >
                Annually
              </label>
            </div>
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
              className="border p-1 w-full pl-6 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
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
              className="border p-1 w-full pl-6 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
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
              className="border p-1 w-full pl-7 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
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
            className="border p-1 w-full pl-2 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="bg-red-100 flex-1 w-[70%] p-4">
        {calculateCompoundInterest().futureValue}
        {Object.entries(calculateCompoundInterest().got).map(
          ([
            year,
            {
              initialAmount,
              totalContributions,
              totalInterestEarned,
              futureValue,
            },
          ]) => (
            <p key={year}>
              {year}: Initial Amount: ${initialAmount.toLocaleString()}, Total
              Contributions: ${totalContributions.toLocaleString()}, Total
              Interest Earned: ${totalInterestEarned.toLocaleString()}, Future
              Value: ${futureValue.toLocaleString()}
            </p>
          )
        )}
      </div>
    </div>
  );
}
