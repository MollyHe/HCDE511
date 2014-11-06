/**
 * Created by menglinhe on 11/5/14.
 */

var svg_parellel=d3.select("#parellel").append("svg")
    .attr("width",1000)
    .attr("height",500)
    .append("g")
    .attr("transform","translate(60,20)");

var data=d3.csv("university.csv");




/*
var data = [
    [0,-0,0,0,0,3 ],
    [1,-1,1,2,1,6 ],
    [2,-2,4,4,0.5,2],
    [3,-3,9,6,0.33,4],
    [4,-4,16,8,0.25,9]
];

var pc = d3.parcoords()("#example")
    .data(data)
    .render()
    .ticks(3)
    .createAxes();

d3.csv('university.csv', function(data){

});





 /*
 //linear color scale
 var blue_to_green=d3.scale.linear()
 .domain([9,50])
 .range(["blue","green"])
 .interpolate(d3.interpolateLab);

 // interact with this variable from a javascript console
 var pc1;

 //load csv and create chart
 d3.csv('university.csv',function(data){
 pc1=d3.parcoords()("#example")
 .data(data)
 .color(function(d){
 return blue_to_green(d['Rank(us news)']);
 })
 .alpha(0.4)
 .render()
 .brushMode("1D-axes")//enable brushing
 .interactive()//

 var explore_count = 0;
 var exploring = {};
 var explore_start = false;
 pc1.svg
 .selectAll(".dimension")
 .style("cursor", "pointer")
 .on("click", function(d) {
 exploring[d] = d in exploring ? false : true;
 event.preventDefault();
 if (exploring[d]) d3.timer(explore(d,explore_count));
 });

 function explore(dimension,count) {
 if (!explore_start) {
 explore_start = true;
 d3.timer(pc1.brush);
 }
 var speed = (Math.round(Math.random()) ? 1 : -1) * (Math.random()+0.5);
 return function(t) {
 if (!exploring[dimension]) return true;
 var domain = pc1.yscale[dimension].domain();
 var width = (domain[1] - domain[0])/4;

 var center = width*1.5*(1+Math.sin(speed*t/1200)) + domain[0];

 pc1.yscale[dimension].brush.extent([
 d3.max([center-width*0.01, domain[0]-width/400]),
 d3.min([center+width*1.01, domain[1]+width/100])
 ])(pc1.g()
 .filter(function(d) {
 return d == dimension;
 })
 );
 };
 };
 });
