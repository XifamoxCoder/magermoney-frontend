import { Locale } from 'vant';
import { useI18n } from 'vue-i18n';

import { appConfig } from '@/app/config';
import { vantLangs } from '@/app/plugins/vant';

import { useSettingsStore } from '../infrastructure/stores';

export function useLanguage() {
	const { lang, setLang } = useSettingsStore();

	const { locale } = useI18n();

	const languages = appConfig.availableLanguages.map((lang) => ({
		text: lang.name,
		value: lang.code
	}));

	const updateSystemLanguage = async (lang: string) => {
		setLang(lang);
		locale.value = lang;
		Locale.use(lang, vantLangs[lang]);
	};

	const updateUserLanguage = async (lang: string) => {
		console.log(lang);
		// TODO:
	};

	const changeLanguage = async (lang: string) => {
		await updateSystemLanguage(lang);
		await updateUserLanguage(lang);
	};

	return { languages, lang, changeLanguage };
}
