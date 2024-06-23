<script lang="ts">
export default {
	name: 'LoginLayout'
};
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import { AppHeader } from '@/shared/ui/components';

const route = useRoute();

const pageTitle = computed(() => route.name as string);
</script>

<template>
	<app-header :title="pageTitle" />
	<slot />
</template>
