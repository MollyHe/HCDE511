/**
 * Created by menglinhe on 11/5/14.
 */

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
