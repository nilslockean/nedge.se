import { readable, Readable } from 'svelte/store';

export type NavItem = {
	path: string;
	title: string;
};

export type Navigation = NavItem[];

export const navigation: Readable<Navigation> = readable([
	{ path: '/', title: 'Hem' },
	{ path: '/om', title: 'Om oss' },
	{ path: '/kontakt', title: 'Kontakt' }
]);
