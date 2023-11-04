<template>
	<NavbarComponent />
	<MainContent />
	<ParalaxComponent />
	
</template>

<script>
import NavbarComponent from "../src/components/NavbarComponent.vue"
import MainContent from "../src/components/MainContent.vue"
import ParalaxComponent from "../src/components/ParalaxComponent.vue"

export default {
	name: "App",

	components: {
		NavbarComponent,
		MainContent,
		ParalaxComponent
	},

	data: () => ({
		//
	}),
}
</script>

<style></style>
