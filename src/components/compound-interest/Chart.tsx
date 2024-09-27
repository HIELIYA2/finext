"use client";

import ReactECharts from "echarts-for-react";
import React from "react";

export default function Chart({ chartOptions }: any) {
  <ReactECharts
    option={chartOptions}
    style={{ height: "100%", width: "100%" }}
  />;
}
