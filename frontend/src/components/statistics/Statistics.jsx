import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import ReactECharts from "echarts-for-react";
import { groupNumber, statisticsOption } from "@/constants/data";
import { useState, useEffect } from "react";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistics</span>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={css.card}>
            <span>Top item this month</span>
            <span>Office comps</span>
          </div>
        </div>

        <div className={css.card}>
          <span>Items</span>
          <span>$ {groupNumber(455)}</span>
        </div>

        <div className={css.card}>
          <span>Profit</span>
          <span>$ {groupNumber(370000)}</span>
        </div>

        <div className={css.card}>
          <span>Daily Average</span>
          <span>$ {groupNumber(2000)}</span>
        </div>
      </div>
      <ReactECharts
        option={{
          ...statisticsOption,
          series: [
            {
              ...statisticsOption.series[0],
              data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
            },
          ],
        }}
      />
    </div>
  );
};

export default Statistics;
