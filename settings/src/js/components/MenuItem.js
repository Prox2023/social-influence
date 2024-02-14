import React from 'react';
const MenuItem = (props) => {
	const active = props.isActive ? 'active' : '';
	return (
		<li
			id={props.id}
			className={active}
		>
			<a href={props.href}>{props.title}</a>
		</li>
	);
}
export default MenuItem;
