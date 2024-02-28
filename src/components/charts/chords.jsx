'use client';
import * as d3 from 'd3'; // we will need d3.js
import { useEffect, useRef } from 'react';

export const ChordDiagram = ({ width, height, data }) => {
  const svgRef = useRef(null);
  useEffect(() => {
    const svgElement = d3.select(svgRef.current);
    var res = d3
      .chord()
      .padAngle(0.05) // padding between entities (black arc)
      .sortSubgroups(d3.descending)(data);

    svgElement
      .datum(res)
      .append('g')
      .selectAll('g')
      .data(function (d) {
        return d.groups;
      })
      .enter()
      .append('g')
      .append('path')
      .style('fill', 'grey')
      .style('stroke', 'black')
      .attr(
        'd',
        d3
          .arc()
          .innerRadius(width / 3 - 10)
          .outerRadius(width / 3)
      )
      .attr('transform', 'translate(400,500)');

    svgElement
      .datum(res)
      .append('g')
      .selectAll('path')
      .data(function (d) {
        return d;
      })
      .enter()
      .append('path')
      .attr('d', d3.ribbon().radius(width / 5 - 10))
      .attr('transform', 'translate(400,500)')
      .call((path) =>
        path
          .transition()
          .duration(1000)
          .attr('d', d3.ribbon().radius(width / 3 - 10))
      )
      .style('fill', '#69b3a2')
      .style('stroke', 'black');
  }, [svgRef, data, width, height]);

  return <svg width={width} height={height} ref={svgRef}></svg>;
};
