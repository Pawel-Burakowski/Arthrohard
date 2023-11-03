<template>
	<NavbarComponent />
	<MainContent />
	
</template>

<script>
import NavbarComponent from "../src/components/NavbarComponent.vue"
import MainContent from "../src/components/MainContent.vue"

export default {
	name: "App",

	components: {
		NavbarComponent,
		MainContent
	},

	data: () => ({
		//
	}),
}
</script>

<style></style>
