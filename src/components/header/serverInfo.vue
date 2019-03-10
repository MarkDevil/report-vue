<template>
	<el-container>
        <v-card-title class="headline"> {{ hostname || server }}</v-card-title>
        <v-card-text> {{ server }} </v-card-text>
        <v-card-actions>
            <v-btn flat color="blue">ok</v-btn>
            <v-btn flat color="blue">cancel</v-btn>
        </v-card-actions>
    </el-container>
</template>

<script>
	export default {
		name: 'serverInfo',
		props: ['hostname', 'server'],
        title: true
	}
</script>

<style>
</style>
