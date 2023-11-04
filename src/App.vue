<template>
	<NavbarComponent />
	<MainContent />
	<ParalaxComponent />
	<ProductsComponent />
	
</template>

<script>
import NavbarComponent from "../src/components/NavbarComponent.vue"
import MainContent from "../src/components/MainContent.vue"
import ParalaxComponent from "../src/components/ParalaxComponent.vue"
import ProductsComponent from "../src/components/ProductsComponent.vue"

export default {
	name: "App",

	components: {
		NavbarComponent,
		MainContent,
		ParalaxComponent,
		ProductsComponent
	},

	data: () => ({
		//
	}),
}
</script>

<style></style>
