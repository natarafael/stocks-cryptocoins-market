import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const Graph = ({ stockData }) => {
  return (
    <CanvasJSChart
      type="chartContainer"
      options={{
        zoomEnabled: true,
        exportEnabled: true,

        axisY: {
          minimum: Math.min(...stockData.map((data) => data.low)) / 1.1,
          maximum: Math.max(...stockData.map((data) => data.high)) * 1.1,

          crosshair: {
            enable: true,
            snapToDataPoint: true,
          },
          gridColor: "lightblue",
          tickColor: "lightblue",
          prefix: "$ ",
        },

        axisX: {
          crosshair: {
            enable: true,
            snapToDataPoint: true,
          },

          labelFontSize: 10,
          intervalType: "month",
          valueFormatString: "DD-MMM-YY",
          labelAngle: -30,

          scaleBreaks: {
            spacing: 0,
            fillOpacity: 0,
            lineThickness: 0,

            customBreaks: stockData.reduce((breaks, value, index, array) => {
              if (index === 0) return breaks;

              const currentDatapointUnix = Number(new Date(value.date));
              const previousDataPointUnix = Number(
                new Date(array[index - 1].date)
              );

              const oneDayInMs = 86400000;

              const diference = previousDataPointUnix - currentDatapointUnix;

              return diference === oneDayInMs
                ? breaks
                : [
                    ...breaks,
                    {
                      startValue: currentDatapointUnix,
                      endValue: previousDataPointUnix - oneDayInMs,
                    },
                  ];
            }, []),
          },
        },
        data: [
          {
            type: "candlestick",
            dataPoints: stockData.map((stockData) => ({
              x: new Date(stockData.date),
              y: [
                stockData.open,
                stockData.high,
                stockData.low,
                stockData.close,
              ],
            })),
          },
        ],
      }}
    />
  );
};

export default Graph;
