import {create} from 'zustand';

const useMenuStore = create((set) => ({
	  menu: [
		{ id: 1, title: "Dashboard", link: "#prox_social_influence" },
		{ id: 2, title: "Settings", link: "#distal_social_influence" },
		{ id: 3, title: "Coming Soon", link: "#social_influence" },
	  ],
}));

export default useMenuStore;
