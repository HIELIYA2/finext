"use client";
import React from "react";

interface InputsProps {
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ form, handleChange }) => {
  return (
    <div className=" text-gray-500 dark:bg-slate-800 dark:text-gray-300 bg-gray-100 flex flex-col gap-4 p-4 w-[95vw] md:w-[30%]">
      <label className="flex flex-col ">
        <div className=" flex">
          <p className="text-sm flex items-center mr-2">
            Compounding frequency
          </p>
          <div></div>
          <div className="relative group w-9">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#888888"
                height="15"
                width="15"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 16 16"
              >
                <path
                  className="cls-1"
                  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM7.30274,4.28083a.95128.95128,0,0,1,1.34971,0,.92836.92836,0,0,1,.27615.67443.95244.95244,0,0,1-1.90483,0A.92362.92362,0,0,1,7.30274,4.28083ZM9.70043,12H6.29957V10.736h.83322V7.7772H6.29957V6.51325H8.88421V10.736h.81622Z"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 z-10 hidden group-hover:block w-[200px]">
              <div className="bg-gray-200 dark:bg-slate-800 p-2 rounded-md shadow-md">
                <p className="text-xs">
                  This is how often the interest is compounded. Monthly means
                  the interest is added at the end of each month
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border dark:border-gray-500 p-1 w-full flex gap-1 text-center">
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
                form.period === "Monthly" ? "bg-gray-200 dark:bg-gray-600" : ""
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
                form.period === "Annually" ? "bg-gray-200 dark:bg-gray-600" : ""
              }`}
            >
              Annually
            </label>
          </div>
        </div>
      </label>

      <label className="flex flex-col">
        <div className=" flex">
          <div>
            <p className="text-sm flex items-center mr-2"> Initial Amount</p>
          </div>
          <div className="relative group w-9">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#888888"
                height="15"
                width="15"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 16 16"
              >
                <path
                  className="cls-1"
                  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM7.30274,4.28083a.95128.95128,0,0,1,1.34971,0,.92836.92836,0,0,1,.27615.67443.95244.95244,0,0,1-1.90483,0A.92362.92362,0,0,1,7.30274,4.28083ZM9.70043,12H6.29957V10.736h.83322V7.7772H6.29957V6.51325H8.88421V10.736h.81622Z"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 z-10 hidden group-hover:block w-[200px]">
              <div className="bg-gray-200 dark:bg-slate-800 p-2 rounded-md shadow-md">
                <p className="text-xs">
                  This is the initial amount of money you are starting with.
                </p>
              </div>
            </div>
          </div>
        </div>

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
            className="text-gray-500 dark:bg-slate-800 dark:text-gray-300 bg-gray-100 dark:border-gray-500 border p-1 w-full pl-6 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
          />
        </div>
      </label>
      <label className="flex flex-col">
        <div className=" flex">
          <div>
            <p className="text-sm flex items-center mr-2">Contribution</p>
          </div>
          <div className="relative group w-9">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#888888"
                height="15"
                width="15"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 16 16"
              >
                <path
                  className="cls-1"
                  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM7.30274,4.28083a.95128.95128,0,0,1,1.34971,0,.92836.92836,0,0,1,.27615.67443.95244.95244,0,0,1-1.90483,0A.92362.92362,0,0,1,7.30274,4.28083ZM9.70043,12H6.29957V10.736h.83322V7.7772H6.29957V6.51325H8.88421V10.736h.81622Z"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 z-10 hidden group-hover:block w-[200px]">
              <div className="bg-gray-200 dark:bg-slate-800 p-2 rounded-md shadow-md">
                <p className="text-xs">
                  This is the amount you want to contribute.
                </p>
              </div>
            </div>
          </div>
        </div>

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
            className="text-gray-500  dark:bg-slate-800 dark:text-gray-300 bg-gray-100 dark:border-gray-500 border p-1 w-full pl-6 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
          />
        </div>
      </label>

      <label className="flex flex-col">
        <div className=" flex">
          <div>
            <p className="text-sm flex items-center mr-2"> Rate of Return</p>
          </div>
          <div className="relative group w-9">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#888888"
                height="15"
                width="15"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 16 16"
              >
                <path
                  className="cls-1"
                  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM7.30274,4.28083a.95128.95128,0,0,1,1.34971,0,.92836.92836,0,0,1,.27615.67443.95244.95244,0,0,1-1.90483,0A.92362.92362,0,0,1,7.30274,4.28083ZM9.70043,12H6.29957V10.736h.83322V7.7772H6.29957V6.51325H8.88421V10.736h.81622Z"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 z-10 hidden group-hover:block w-[200px]">
              <div className="bg-gray-200 dark:bg-slate-800 p-2 rounded-md shadow-md">
                <p className="text-xs">
                  This is the average annual rate of return of the investment.
                </p>
              </div>
            </div>
          </div>
        </div>

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
            className="text-gray-500 dark:bg-slate-800 dark:text-gray-300 bg-gray-100 dark:border-gray-500 border p-1 w-full pl-7 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
          />
        </div>
      </label>
      <label className="flex flex-col">
        <div className=" flex">
          <div>
            <p className="text-sm flex items-center mr-2">Years of Growth</p>
          </div>
          <div className="relative group w-9">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#888888"
                height="15"
                width="15"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 16 16"
              >
                <path
                  className="cls-1"
                  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM7.30274,4.28083a.95128.95128,0,0,1,1.34971,0,.92836.92836,0,0,1,.27615.67443.95244.95244,0,0,1-1.90483,0A.92362.92362,0,0,1,7.30274,4.28083ZM9.70043,12H6.29957V10.736h.83322V7.7772H6.29957V6.51325H8.88421V10.736h.81622Z"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 z-10 hidden group-hover:block w-[200px]">
              <div className="bg-gray-200 dark:bg-slate-800 p-2 rounded-md shadow-md">
                <p className="text-xs">
                  This is the total number of years that the investment will
                  grow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <input
          name="yearsOfGrowth"
          type="number"
          value={form.yearsOfGrowth}
          onChange={handleChange}
          className="text-gray-500 dark:bg-slate-800 dark:text-gray-300 bg-gray-100 dark:border-gray-500 border p-1 w-full pl-2 text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white focus:ring-opacity-50"
        />
      </label>
    </div>
  );
};

export default Inputs;
