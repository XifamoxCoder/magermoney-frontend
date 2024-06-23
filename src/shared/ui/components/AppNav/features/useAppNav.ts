import { useAppStore } from '@/shared/infrastructure/stores';

export function useAppNav() {
	const { setNav, resetNav, nav } = useAppStore();

	return {
		setNav,
		resetNav,
		nav
	};
}
