import React from "react";
import useMenuStore from "../stores/MenuStore";
import MenuItem from "./MenuItem";
import Content from "./Content";

const Menu = () => {
	const { menu} = useMenuStore();
	console.log(menu);

	function buildMenu() {
		return menu.map((item) => {
			let isActive = item.id === 1;
			return (
				<MenuItem key={item.id}
						  href={item.link}
						  title={item.title}
						  isActive={isActive}
				/>
			);
		});
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
		</div>
	);
}
export default Menu;
