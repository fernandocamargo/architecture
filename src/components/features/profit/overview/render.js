import property from "lodash/property";
import React, { Fragment } from "react";

import Form from "components/form";
import Widget from "components/widget";
import Menu from "components/menu";
import Currency from "components/currency";
import Percentage from "components/percentage";
import Table from "components/table";
import Product from "components/product";
import Pagination from "components/pagination";
import FormContextLocation from "components/forms/context-location";
import Chart from "components/chart";

export default ({ className, sales }) => (
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
            type: "column"
          },
          title: {
            text: ""
          },
          xAxis: {
            categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
          },
          yAxis: {
            min: 0,
            title: {
              enabled: false
            },
            stackLabels: {
              enabled: true,
              style: {
                fontWeight: "bold",
                color: "gray"
              }
            }
          },
          legend: {
            align: "right",
            x: -30,
            verticalAlign: "top",
            y: 25,
            floating: true,
            backgroundColor: "white",
            borderColor: "#CCC",
            borderWidth: 1,
            shadow: false
          },
          tooltip: {
            headerFormat: "<b>{point.x}</b><br/>",
            pointFormat:
              "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
          },
          plotOptions: {
            column: {
              stacking: "normal",
              dataLabels: {
                enabled: true,
                color: "white"
              }
            }
          },
          series: [
            {
              name: "John",
              data: [5, 3, 4, 7, 2]
            },
            {
              name: "Jane",
              data: [2, 2, 3, 2, 1]
            },
            {
              name: "Joe",
              data: [3, 4, 4, 2, 5]
            }
          ]
        }}
      />
    </Widget>
    <Widget>
      <Chart
        {...{
          chart: {
            type: "line"
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
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]
          },
          yAxis: {
            title: {
              enabled: false
            }
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
    <Widget>
      <div>
        <h3>Products</h3>
        <Form />
        <Menu>
          {[
            { url: "", title: "Export" },
            { url: "", title: "Edit" },
            { url: "", title: "Settings" }
          ]}
        </Menu>
        <Table
          rows={sales.results}
          columns={[
            {
              label: () => "starred",
              content: ({ item: { starred } }) => String(starred)
            },
            {
              label: () => <Fragment>Product</Fragment>,
              content: ({
                item: { productName, customName },
                links: { amazon, sellerCentral },
                pk: { sku },
                asin
              }) => (
                <Product
                  name={customName || productName}
                  sku={{ title: sku, url: amazon }}
                  asin={{ title: asin, url: sellerCentral }}
                />
              )
            },
            {
              label: "Sales",
              content: ({ sales: { value, percentage } }) => (
                <Percentage value={percentage}>
                  <Currency>{value}</Currency>
                </Percentage>
              )
            },
            { label: "Orders", content: property("orders") },
            { label: "Refunds", content: property("refunds") },
            {
              label: "Profit",
              content: ({ profit: { value, percentage } }) => (
                <Percentage value={percentage}>
                  <Currency>{value}</Currency>
                </Percentage>
              )
            },
            {
              label: "Margin",
              content: ({ profit: { value, percentage } }) => (
                <Percentage value={percentage}>
                  <Currency>{value}</Currency>
                </Percentage>
              )
            },
            {
              label: () => "Info",
              content: () => (
                <Menu>{[{ url: "", title: "Link to Amazon" }]}</Menu>
              )
            },
            {
              label: () => "Details",
              content: () => (
                <Menu>
                  {[
                    { url: "", title: "Calculate something" },
                    { url: "", title: "See charts" }
                  ]}
                </Menu>
              )
            }
          ]}
        />
        <Pagination
          {...sales.meta.pagination}
          onPaginate={({ page }) => console.log("onPaginate();", +page)}
        />
      </div>
    </Widget>
  </div>
);
