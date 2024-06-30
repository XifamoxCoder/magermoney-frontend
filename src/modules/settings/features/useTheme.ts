import { useSettingsStore } from '../infrastructure/stores';

export function useTheme() {
	const { theme, setTheme, isDark } = useSettingsStore();

	const toggleTheme = () => {
		setTheme(unref(isDark) ? 'light' : 'dark');
	};

	return {
		isDark,
		toggleTheme,
		theme
	};
}
