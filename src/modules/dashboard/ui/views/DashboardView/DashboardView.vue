<script setup lang="ts">
import { useUser } from '@/modules/users';

const { user, isLoading, fetchUser } = useUser();

const handleGetUserById = (id: number) => {
	fetchUser({}, id);
};
</script>

<template>
	<div>Dashboard View</div>

	<div v-if="user">{{ user?.createdAt }}</div>

	<van-button :loading="isLoading" @click="() => handleGetUserById(1)"
		>Get user ID 1</van-button
	>
</template>
