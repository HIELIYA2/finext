"use client";
import React from "react";

interface InputsProps {
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ form, handleChange }) => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-400 flex flex-col gap-4 p-4  w-[30%]">
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
            className="bg-white text-black dark:bg-gray-900 dark:text-gray-400 border p-1 w-full pl-6 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
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
            className="bg-white text-black dark:bg-gray-900 dark:text-gray-400 border p-1 w-full pl-6 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
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
            className="bg-white text-black dark:bg-gray-900 dark:text-gray-400 border p-1 w-full pl-7 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
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
          className="bg-white text-black dark:bg-gray-900 dark:text-gray-400 border p-1 w-full pl-2 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
        />
      </label>
    </div>
  );
};

export default Inputs;
