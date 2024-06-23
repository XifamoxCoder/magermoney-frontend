export interface Navigation {
	title: string;
	icon: string;
	path?: string;
	children?: NavigationChildren[];
}

export interface NavigationChildren extends Navigation {}
