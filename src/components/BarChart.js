import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  { day: "Mon", sales: 23, occupancy: 10 },
  { day: "Tues", sales: 34, occupancy: 20 },
  { day: "Wedn", sales: 23, occupancy: 15 },
  { day: "Thurs", sales: 67, occupancy: 60 },
  { day: "Frid", sales: 93, occupancy: 90 },
  { day: "Sat", sales: 100, occupancy: 100 },
  { day: "Sun", sales: 54, occupancy: 50 },
];

export function BarChart() {
  const isRef = useRef(false);
  const margin = { top: 0, right: 10, bottom: 0, left: 10 };
  const width = 430;
  const height = 300;
  useEffect(() => {
    if (isRef.current) {
      const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const subgroups = ["sales", "occupancy"];

      const x = d3
        .scaleBand()
        .domain(data.map((el) => el.day))
        .range([0, width])
        .padding([0.1]);
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(0));

      const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      const xSubgroup = d3
        .scaleBand()
        .domain(subgroups)
        .range([0, x.bandwidth()])
        .padding([0.02]);

      const color = d3
        .scaleOrdinal()
        .domain(subgroups)
        .range(["#135846", "#E23428"]);

      svg
        .append("g")
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${x(d.day)},0)`)
        .selectAll("rect")
        .data((d) => subgroups.map((key) => ({ key, value: d[key] })))
        .enter()
        .append("rect")
        .attr("x", (d) => xSubgroup(d.key))
        .attr("y", (d) => y(d.value))
        .attr("width", 15)
        .attr("height", (d) => height - y(d.value))
        .attr("fill", (d) => color(d.key));

      d3.selectAll("rect")
        .on("mouseenter", mouseEnter)
        .on("mouseleave", mouseLeave);

      const toolTip = d3.select("#tooltip");

      function mouseEnter(event, data) {
        d3.select(this).attr("opacity", 0.5);
        data.key === "sales"
          ? toolTip
              .text(`Sales: $${data.value}`)
              .style("color", "#135846")
              .style("visibility", "visible")
          : toolTip
              .text(`Occupancy: ${data.value}%`)
              .style("color", "#E23428")
              .style("visibility", "visible");
      }
      function mouseLeave(event, data) {
        d3.select(this).attr("opacity", 1);
        toolTip.style("visibility", "hidden");
      }
      let dataColor = {
        0: ["Sales", "#135846"],
        1: ["Occupancy", "#E23428"],
      };

      let legend = svg
        .append("g")
        .attr("class", "legend")
        .attr("x", 30 - 65)
        .attr("y", 50)
        .attr("height", 100)
        .attr("width", 100)
        .attr("transform", "translate(-20,50)");

      let legendRect = legend.selectAll("rect").data(dataColor);
      legendRect
        .enter()
        .append("rect")
        .attr("x", 400 - 65)
        .attr("width", 10)
        .attr("height", 10);

      legendRect
        .attr("y", function (d, i) {
          return i * 20;
        })
        .style("fill", function (d) {
          return d[1];
        });

      var legendText = legend.selectAll("text").data(dataColor);

      legendText
        .enter()
        .append("text")
        .attr("x", 30 - 52);

      legendText
        .attr("y", function (d, i) {
          return i * 20 + 9;
        })
        .text(function (d) {
          return d[0];
        });
    }
    return () => {
      isRef.current = true;
    };
  }, [margin.bottom, margin.left, margin.right, margin.top]);

  return (
    <div
      style={{
        // width: "fit-content",
        // height: "350px",
        padding: "5px 20px",
        margin: "0px 20px",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <div id="tooltip" style={{ height: 5 }} />
      <div id="chart" />
    </div>
  );
}
