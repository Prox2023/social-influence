import React from "react";
import PieChartWidget from "./widgets/PieChartWidget";
import Card from "./Card";
const Content = () => {
  return (
	<div>
	  <PieChartWidget />
		<Card variant="md" title="another card">
			<p>Some content</p>
		</Card>
		<Card variant="lg">
			<p>Some content</p>
		</Card>
	</div>
  );
};

export default Content;
