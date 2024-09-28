"use client";

import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";
import * as echarts from "echarts";
import { defaultTheme } from "@/helper/echart.config";

// Dynamically import the Inputs and Display components for lazy loading
const Inputs = dynamic(() => import("@/components/compound-interest/Inputs"), {
  ssr: false,
});
const Display = dynamic(
  () => import("@/components/compound-interest/Display"),
  { ssr: false }
);

// Register ECharts theme outside of the component to avoid redundant calls
echarts.registerTheme("darkMode", defaultTheme);

export default function Home() {
  const [form, setForm] = useState({
    initialAmount: 5000,
    contribution: 150,
    period: "Monthly",
    rateOfReturn: 4,
    yearsOfGrowth: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  // Memoize the form object to avoid unnecessary re-renders of children components
  const memoizedForm = useMemo(() => form, [form]);

  return (
    <div className="container mx-auto mt-12 gap-4 bg-gray-100 dark:bg-slate-800 shadow-sm rounded-lg p-6 sm:flex sm:flex-col md:flex-row  w-[98vw] md:w-[70%]">
      <Inputs form={memoizedForm} handleChange={handleChange} />
      <Display form={memoizedForm} />
    </div>
  );
}
