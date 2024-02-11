import React from "react";
import useMenuStore from "../stores/MenuStore";
import MenuItem from "./MenuItem";

const Menu = () => {
	const { menu} = useMenuStore();
	console.log(menu);

	function buildMenu() {
		return menu.map((item) => (
			<MenuItem key={item.id}
					  href={item.link}
					  title={item.title} />
		));
	}
	return (
		<div>
			<div>
				<div className={'prox-header'}>
					<div id={'prox-logo'}></div>
					<h1 id={'prox-title'}>Social Influence</h1>
				</div>
				<div className={'prox-sidebar'}>
					<ul>
						{buildMenu()}
					</ul>
				</div>
			</div>
			{/* Your component's content goes here */}
		</div>
	);
}
export default Menu;
