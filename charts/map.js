/**
 * Created by menglinhe on 10/31/14.
 */
var width=1000, height=500;

var projection=d3.geo.albersUsa()
    .scale(1000)
    .translate([width/2,height/2]);

var path=d3.geo.path()
    .projection(projection);

var svg_map=d3.select("#map")
    .append("svg")
    .attr("width",width)
    .attr("height",height);
d3.json("states_usa.topo.json",function(error, topology){
    //g.append("g")
    //.attr("id","states")
    svg_map.selectAll("path")
        .data(topojson.feature(topology,topology.objects.states_usa).features)
        .enter()
        .append("path")
        .attr("id", function(d) { return d.id; })
        .attr("d", path)
        .on("click", state_clicked);
});

/*
var proj=d3.geo.mercator()
                .center([0,0])
                .translate(proj.translate())
                .scale(proj.scale())
                .scaleExtent([height*.33, 4 * height])
                .on("zoom", zoom);

var path = d3.geo.path()
    .projection(proj);

var zoom = d3.behavior.zoom()
    .translate(proj.translate())
    .scale(proj.scale())
    .scaleExtent([height*.33, 4 * height])
    .on("zoom", zoom);

var svg=s3.select("#map")
            .append("svg")
            .attr("width",width)
            .attr("height",height)
            .call(zoom);

function zoom() {
    proj.translate(d3.event.translate).scale(d3.event.scale);
    svg.selectAll("path").attr("d", path);
    circles
        .attr("cx", function(d){return proj([d.long, d.lat])[0];})
        .attr("cy", function(d){return proj([d.long, d.lat])[1];});
}
    */