import React from "react";
import { createRoot } from "react-dom/client";
import ProxSocialInfluence from './main/ProxSocialInfluence';
import '../css/main.scss';

document.addEventListener('DOMContentLoaded', () => {
	const proxSocialInfluenceElement = document.getElementById('prox_social_influence');

	if (proxSocialInfluenceElement) {
		const root = createRoot(proxSocialInfluenceElement);
		root.render(<ProxSocialInfluence tab="home" />);
	}
});
