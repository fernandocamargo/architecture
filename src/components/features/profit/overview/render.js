import React from "react";

import Widget from "components/widget";
import WidgetProducts from "components/widgets/products";
import FormContextLocation from "components/forms/context-location";
import Chart from "components/chart";

export default ({ className, details, sales }) => (
  <div className={className}>
    <Widget>
      <FormContextLocation
        onChange={data => console.log("FormContextLocation.onChange();", data)}
      />
    </Widget>
    <Widget>
      <Chart
        {...{
          chart: {
            type: "waterfall"
          },
          title: {
            text: ""
          },
          yAxis: {
            visible: false
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          series: [
            {
              data: [
                { name: "Gross Sales", y: 150 },
                { name: "Costs", y: -118 },
                { name: "Profit", y: 32, isSum: true }
              ]
            }
          ]
        }}
      />
    </Widget>
    <Widget>
      <Chart
        {...{
          chart: {
            type: "spline"
          },
          title: {
            text: ""
          },
          subtitle: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          xAxis: {
            visible: false
          },
          yAxis: {
            visible: false
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              },
              enableMouseTracking: false
            }
          },
          series: [
            {
              name: "Tokyo",
              data: [
                7.0,
                6.9,
                9.5,
                14.5,
                18.4,
                21.5,
                25.2,
                26.5,
                23.3,
                18.3,
                13.9,
                9.6
              ]
            },
            {
              name: "London",
              data: [
                3.9,
                4.2,
                5.7,
                8.5,
                11.9,
                15.2,
                17.0,
                16.6,
                14.2,
                10.3,
                6.6,
                4.8
              ]
            }
          ]
        }}
      />
    </Widget>
    <WidgetProducts
      results={sales.results}
      pagination={sales.meta.pagination}
    />
  </div>
);
