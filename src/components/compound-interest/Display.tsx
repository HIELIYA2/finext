"use client";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

interface DisplayProps {
  form: any;
}

const Display: React.FC<DisplayProps> = ({ form }) => {
  const [chartOptions, setChartOptions] = useState({});

  const displayNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
  };

  const calculateCompoundInterest = React.useMemo(() => {
    const { initialAmount, contribution, period, rateOfReturn, yearsOfGrowth } =
      form;

    const r = rateOfReturn / 100;
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

    const futureValue =
      P * Math.pow(1 + r / n, n * t) +
      PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    const result = {
      got: {} as { [year: number]: any },
      futureValue: futureValue.toFixed(0),
    };

    for (let i = 1; i <= t; i++) {
      const year = i;
      const yearFutureValue =
        P * Math.pow(1 + r / n, n * year) +
        PMT * ((Math.pow(1 + r / n, n * year) - 1) / (r / n));
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
  }, [form]);

  useEffect(() => {
    interface Result {
      got: { [key: string]: any };
    }

    const result: Result = calculateCompoundInterest;
    const years = Object.keys(result.got);
    const contributions = years.map(
      (year) => result.got[year].totalContributions
    );
    const interestEarned = years.map(
      (year) => result.got[year].totalInterestEarned
    );
    const futureValue = years.map((year) => result.got[year].futureValue);
    const series: {
      name: string;
      type: string;
      stack: string;
      data: number[];
    }[] = [
      {
        name: "Contributions",
        type: "bar",
        stack: "total",
        data: contributions,
      },
      {
        name: "Interest Earned",
        type: "bar",
        stack: "total",
        data: interestEarned,
      },
      {
        name: "Future Value",
        type: "bar",
        stack: "total",
        data: futureValue,
      },
    ];

    const stackInfo: {
      [key: string]: { stackStart: number[]; stackEnd: number[] };
    } = {};
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) {
          continue;
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: [],
          };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data) {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }

    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data as
        | number[]
        | { value: number; itemStyle: object }[];
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 7 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j] as number,
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
          },
        };
      }
    }

    setChartOptions({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Contributions", "Interest Earned", "Future Value"],
        orient: "horizontal", // default is horizontal; can change to vertical if needed
        bottom: 0, // position at the bottom of the chart
      },
      xAxis: {
        type: "category",
        data: years,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: number) => formatNumber(value),
        },
      },
      series,
    });
  }, [form]);

  const formattedFutureValue = displayNumber(
    parseFloat(calculateCompoundInterest.futureValue)
  );

  return (
    <div className="flex flex-col items-center justify-center p-4 w-[70%]">
      <div className="text-2xl">
        After {form.yearsOfGrowth} years, your total balance is{" "}
        <strong>${formattedFutureValue}</strong>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <ReactECharts
          option={chartOptions}
          style={{ height: "100%", width: "100%" }}
          theme="darkMode"
        />
      </div>
    </div>
  );
};

export default Display;
