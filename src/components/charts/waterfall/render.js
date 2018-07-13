import React from "react";

import Chart from "components/chart";

export const getMarkup = (stack, [key, value]) =>
  stack.concat(`
    <dl style="display: flex; margin: 0; width: 100%; justify-content: space-between;">
      <dt>${key}:</dt>
      <dd>${value}</dd>
    </dl>
  `);

export function formatter() {
  const {
    axis: { categories },
    pos
  } = this;
  const { legend } = categories[pos];

  return Object.entries(legend).reduce(getMarkup, "");
}

export const getValue = ({ value }) =>
  !!value ? { y: value } : { isSum: true };

export const getData = categories => categories.map(getValue);

export default ({ categories }) => (
  <Chart
    {...{
      chart: {
        type: "waterfall"
      },
      title: false,
      xAxis: {
        labels: {
          useHTML: true,
          formatter
        },
        type: "category",
        categories
      },
      yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: false,
        labels: {
          enabled: false
        }
      },
      legend: {
        enabled: false
      },
      tooltip: false,
      series: [
        {
          data: getData(categories),
          dataLabels: {
            enabled: true,
            align: "left",
            verticalAlign: "top"
          }
        }
      ],
      credits: {
        enabled: false
      }
    }}
  />
);
