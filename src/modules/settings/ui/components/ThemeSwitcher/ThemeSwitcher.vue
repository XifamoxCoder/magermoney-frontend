<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useTheme } from '@/modules/settings';

const { t } = useI18n();
const { isDark, toggleTheme } = useTheme();
</script>

<template>
	<van-cell :title="t('settings.darkMode')">
		<template #right-icon>
			<van-switch :model-value="isDark" @change="toggleTheme" />
		</template>
	</van-cell>
</template>
