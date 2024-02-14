import React from 'react';

const Card = (props) => {
	const { title, variant, children } = props;
	const className = `prox-card ${variant ? `prox-card--${variant}` : ''}`;
	return (
		<div className={className}>
			{title && <div className="header">
				{title}
			</div>}
			<div className="content">
				{children}
			</div>
		</div>);
};
export default Card;
