import React from "react";
import Chart from 'react-apexcharts';
import Card from '../../components/Card';

const PieChartWidget = (props) => {
	const series = [
		{
			name: 'Gucci',
			type: 'column',
			data: [10, 15, 7, 14, 9, 12, 10, 19] // example views
		},
		{
			name: 'Husband on toilet',
			type: 'column',
			data: [20, 25, 17, 24, 19, 22, 3, 9] // example views
		},
		{
			name: 'Kiwi-G playing StarCitizen',
			type: 'column',
			data: [40, 45, 57, 64, 29, 52, 23, 39] // example views
		},
		{
			name: 'Average views',
			type: 'line',
			data: [14, 16, 20, 8, 9, 17, 18, 22] // example average views
		}
	];

	const options = {
		chart: {
			height: 350,
			type: 'line',
		},
		stroke: {
			width: [0, 4]
		},
		title: {
			text: 'Content Performance',
		},
		xaxis: {
			type: 'datetime',
			categories: ['2023-01-01T00:00:00', '2023-02-01T00:00:00', '2023-03-01T00:00:00', '2023-04-01T00:00:00', '2023-05-01T00:00:00', '2023-06-01T00:00:00', '2023-07-01T00:00:00', '2023-08-01T00:00:00'] // JS date string format
		},
		yaxis: [{
			title: {
				text: 'Views',
			},
			max: 80,
			min: 0
		}, {
			opposite: true,
			title: {
				text: 'Average Views'
			},
			max: 22,
		}]
	};

	return (
		<Card
			variant="lg"
		>
			<Chart options={options} series={series} type="line" height={350} />
		</Card>
	);
}

export default PieChartWidget;
