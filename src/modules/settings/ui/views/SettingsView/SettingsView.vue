<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { AppCellTitle } from '@/shared/ui/components';

import { LangSwitcher, ThemeSwitcher } from '../../components';

const { t } = useI18n();
</script>

<template>
	<div :class="$style['settings-view']">
		<app-cell-title
			:text="t('settings.app')"
			:class="$style['settings-view__cell-title']"
		/>
		<van-cell-group>
			<theme-switcher />
			<lang-switcher />
		</van-cell-group>
	</div>
</template>

<style module lang="scss">
@import './styles/SettingsView.module';
</style>
