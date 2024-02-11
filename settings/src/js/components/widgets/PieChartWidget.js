import React from "react";
import {BaseControl, Panel} from '@wordpress/components';
import { PieChart } from 'react-minimal-pie-chart';

/**
 * Represents a Pie Chart Widget component.
 *
 * @param {Object} props - The props object containing the configuration of the widget.
 * @returns {ReactElement} - The rendered Pie Chart Widget component.
 */
const PieChartWidget = (props) => {
	const data = [{ title: 'One', value: 10, color: '#E38627' }, { title: 'Two', value: 15, color: '#C13C37'}, { title: 'Three', value: 20, color: '#6A2135' }];  //dummy data
	return (
		<Panel
			header="Pie Chart Widget"
			icon="chart-pie"
			width="10%"
		>
		<BaseControl label="Pie chart widget">
			<PieChart
				data={data}
				radius={40}
				lineWidth={60}
				segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
			/>
		</BaseControl></Panel>
	);
}
export default PieChartWidget;
