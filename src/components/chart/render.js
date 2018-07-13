import React from "react";

import Highcharts from "highcharts";
import Enhancement from "highcharts/highcharts-more";
import Chart from "highcharts-react-official";

Enhancement(Highcharts);

export default props => <Chart highcharts={Highcharts} options={props} />;
