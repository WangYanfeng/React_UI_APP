import React from 'react';
import { Carousel } from 'element-react';

import { Bar as BarChart } from 'react-chartjs';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeDeviceId: "", dialogVisible: true };
    }

    render() {
        var barData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [35, 59, 80, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        };
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

        return (
            <div>
                <div className="device_carousel">
                    <Carousel interval="4000" type="card" height="200px">
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => {
                                return (
                                    <Carousel.Item key={index} >
                                        <div className="choose_device" onClick={this.props.chooseDevice.bind(this, item)}>Device {item}</div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div>

                </div>
                <BarChart data={barData} options={barOptions} width="600" height="250" />
            </div>
        )
    }

}

export { Dashboard }