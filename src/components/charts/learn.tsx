'use client';
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function ChartLearn() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const xScale = d3.scaleLinear().domain([0, 100]).range([10, 290]);
    const svgElement = d3.select(ref.current);
    const axisGenerator = d3.axisBottom(xScale);

    svgElement
      .append('g')
      .attr('transform', 'translate(0, 50)')
      .call(axisGenerator);
  }, []);

  return <svg ref={ref} />;
}

export default ChartLearn;
