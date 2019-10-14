import React from 'react';
import { Layout } from 'element-react';
import { Line, Bar, Radar, Doughnut } from 'react-chartjs';

import './dashboard.css'

var barOptions = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - If there is a stroke on each bar
    barShowStroke: true,
    //Number - Pixel width of the bar stroke
    barStrokeWidth: 2,
    //Number - Spacing between each of the X value sets
    barValueSpacing: 5,
    //Number - Spacing between data sets within X values
    barDatasetSpacing: 1,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineOptions = {
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,
    //Boolean - Whether to show a dot for each point
    pointDot: true,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
    //Boolean - Whether to horizontally center the label and point dot inside the grid
    offsetGridLines: false
}
var radarOptions = {
    //Boolean - Whether to show lines for each scale point
    scaleShowLine: true,
    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut: true,
    //Boolean - Whether to show labels on the scale
    scaleShowLabels: false,
    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero: true,
    //String - Colour of the angle line
    angleLineColor: "rgba(0,0,0,.1)",
    //Number - Pixel width of the angle line
    angleLineWidth: 1,
    //Number - Interval at which to draw angle lines ("every Nth point")
    angleLineInterval: 1,
    //String - Point label font declaration
    pointLabelFontFamily: "'Arial'",
    //String - Point label font weight
    pointLabelFontStyle: "normal",
    //Number - Point label font size in pixels
    pointLabelFontSize: 10,
    //String - Point label font colour
    pointLabelFontColor: "#666",
    //Boolean - Whether to show a dot for each point
    pointDot: true,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 3,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
}
var doughnutOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
};

// Data generation
function getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for (var i = 0; i < numItems; i++) {
        data.push({
            label: names[i],
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for (var i = 0; i < numItems; i++) {
        data.push({
            time: new Date(baseTime + i * dayMs).toLocaleDateString(),
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function getData() {
    let data = [];

    let lineData = getRandomDateArray(80);
    let lineLabels = [];
    let lineValues = [];
    for (let index = 0; index < lineData.length; index++) {
        lineLabels.push(lineData[index].time);
        lineValues.push(lineData[index].value);
    }
    data.push({
        title: 'Visits',
        label: lineLabels,
        data: lineValues
    });
    let lineData2 = getRandomDateArray(80);
    let lineLabels2 = [];
    let lineValues2 = [];
    for (let index = 0; index < lineData2.length; index++) {
        lineLabels2.push(lineData2[index].time);
        lineValues2.push(lineData2[index].value);
    }
    data.push({
        title: 'Visits',
        label: lineLabels2,
        data: lineValues2
    });

    let barData = getRandomArray(20);
    let barLabels = [];
    let barValues = [];
    for (let index = 0; index < barData.length; index++) {
        barLabels.push(barData[index].label);
        barValues.push(barData[index].value);
    }
    data.push({
        title: 'Categories',
        label: barLabels,
        data: barValues
    });
    let barData2 = getRandomArray(20);
    let barLabels2 = [];
    let barValues2 = [];
    for (let index = 0; index < barData2.length; index++) {
        barLabels2.push(barData2[index].label);
        barValues2.push(barData2[index].value);
    }
    data.push({
        title: 'Categories',
        label: barLabels2,
        data: barValues2
    });

    let radarData = getRandomArray(10);
    let radarLabels = [];
    let radarValues = [];
    for (let index = 0; index < radarData.length; index++) {
        radarLabels.push(radarData[index].label);
        radarValues.push(radarData[index].value);
    }
    data.push({
        title: 'Categories',
        label: radarLabels,
        data: radarValues
    });
    let radarData2 = getRandomArray(10);
    let radarLabels2 = [];
    let radarValues2 = [];
    for (let index = 0; index < radarData2.length; index++) {
        radarLabels2.push(radarData2[index].label);
        radarValues2.push(radarData2[index].value);
    }
    data.push({
        title: 'Categories',
        label: radarLabels2,
        data: radarValues2
    });

    let doughnutData = [
        {
            value: 100 * Math.random(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 100 * Math.random(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100 * Math.random(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ]
    data.push({
        title: 'Data 4',
        data: doughnutData
    });

    return data;
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData()
        };
    }

    componentDidMount() {
        this.refreshData = setInterval(() => {
            this.setState({
                data: getData()
            })
        }, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.refreshData);
    }

    render() {
        var lineData = {
            labels: this.state.data[0].label,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.state.data[0].data
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.state.data[1].data
                }
            ]
        }
        var barData = {
            labels: this.state.data[2].label,
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: this.state.data[2].data
            }, {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: this.state.data[3].data
            }]
        };
        var radarData = {
            labels: this.state.data[4].label,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.state.data[4].data
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.state.data[5].data
                }
            ]
        }
        var doughnutData = this.state.data[6].data;

        return (
            <div className="dashboard_container" >
                <div className="chart_wrapper">
                    <Layout.Row>
                        <div className="chart_box">
                            <Line data={lineData} options={lineOptions} width="1200" height="350" />
                        </div>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="10">
                            <div className="chart_box">
                                <Bar data={barData} options={barOptions} width="500" height="250" />
                            </div>
                        </Layout.Col>
                        <Layout.Col span="7">
                            <div className="chart_box">
                                <Radar data={radarData} options={radarOptions} height="250" />
                            </div>
                        </Layout.Col>
                        <Layout.Col span="7">
                            <div className="chart_box">
                                <Doughnut data={doughnutData} options={doughnutOptions} height="250" />
                            </div>
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </div>
        )
    }

}

export { Dashboard }