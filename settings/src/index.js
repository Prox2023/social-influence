import React from 'react';
import ReactDOM from 'react-dom';
import ProxSocialInfluence from './main/ProxSocialInfluence';

document.addEventListener('DOMContentLoaded', () => {
	const proxSocialInfluenceElement = document.getElementById('prox_social_influence');

	if (proxSocialInfluenceElement) {
		ReactDOM.render(<ProxSocialInfluence />, proxSocialInfluenceElement);
	}
});
