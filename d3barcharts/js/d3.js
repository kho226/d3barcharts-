
var svgHeight = 500;
var svgWidth = 960;
var barSpacing = 2; // The amount of space you want to keep between the bars
var padding = {
    left: 20, right: 0,
    top: 20, bottom: 20
};

function animateBarsUp(data) {
  d3.selectAll("svg > *").remove();
  var maxFrequency = get_max_frequency(data);
  var maxWidth = svgWidth - padding.left - padding.right;
  var maxHeight = svgHeight - padding.top - padding.bottom;

  // Define your conversion functions
  var convert = {
    x: d3.scale.ordinal(),
    y: d3.scale.linear()
  };

  // Define your axis
  var axis = {
    x: d3.svg.axis().orient('bottom'),
    y: d3.svg.axis().orient('left')
  };

  // Define the conversion function for the axis points
  axis.x.scale(convert.x);
  axis.y.scale(convert.y);
  axis.y.ticks(maxFrequency);


  // Define the output range of your conversion functions
  convert.y.range([maxHeight, 0]);
  convert.x.rangeRoundBands([0, maxWidth]);

  // Once you get your data, compute the domains
  convert.x.domain(data.map(function (d) {
      return d.letter;
    })
  );
  convert.y.domain([0, maxFrequency]);

  // Setup the markup for your SVG
  var svg = d3.select('.chart')
    .attr({
        width: svgWidth,
        height: svgHeight
    });

  // The group node that will contain all the other nodes
  // that render your chart
  var chart = svg.append('g')
    .attr({
        transform: function (d, i) {
          return 'translate(' + padding.left + ',' + padding.top + ')';
        }
      });

  chart.append('g') // Container for the axis
    .attr({
      class: 'x axis',
      transform: 'translate(0,' + maxHeight + ')'
    })
    .call(axis.x); // Insert an axis inside this node

  chart.append('g') // Container for the axis
    .attr({
      class: 'y axis',
      height: maxHeight

    })
    .call(axis.y) // Insert an axis inside this node
    .append("text")
    .attr("y",-33)
    .attr("transform","rotate(-90)")
    .attr("dy",".71em")
    .style("text-anchor", "end")
    .text("Count");

  var bars = chart
    .selectAll('g.bar-group')
    .data(data)
    .enter()
    .append('g') // Container for the each bar
    .attr({
      transform: function (d, i) {
        return 'translate(' + convert.x(d.letter) + ', 0)';
      },
      class: 'bar-group'
    });

  bars.append('rect')
        .attr({
        y: maxHeight,
        height: 0,
        width: function(d) {return convert.x.rangeBand(d) - 1;},
        class: 'bar'
    })
    .transition()
    .duration(1500)
    .attr({
      y: function (d, i) {
        return convert.y(d.frequency);
      },
      height: function (d, i) {
        return maxHeight - convert.y(d.frequency);
      }
    });

  return chart;
}
//animateBarsUp();
