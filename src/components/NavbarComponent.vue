<template>
	<div>
		<nav
			class="fixed inset-0 z-[100] flex h-[85px] bg-white shadow-custom lg:h-[122px]"
		>
			<ul
				class="flex items-center px-16 font-light uppercase w-full justify-between"
			>
				<li>
					<a href="#">
						<img
							src="../images/Arthrohard.png"
							alt="Arthrohard"
							class="w-[180px] md:w-[240px]"
						/>
					</a>
				</li>
				<div
					class="md:flex md:items-center gap-[40px] hidden font-lato mx-auto"
				>
					<li v-for="link in links">
						<a :href="link.link" class="text-sm md:text-base hover:underline">{{
							link.name
						}}</a>
					</li>
				</div>
				<div class="md:hidden">
					<ButtonComponent
						:toggleMenu="toggleMenu"
						:isMenuVisible="isMenuVisible"
						:links="links"
					/>
				</div>
			</ul>
		</nav>
	</div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue"
import { ref } from "vue"

export default {
	components: {
		ButtonComponent,
	},
	setup() {
		const links = ref([
			{ name: "Co nas wyróżnia", link: "#about-us" },
			{ name: "Skład", link: "#composition" },
			{ name: "Produkty", link: "#products" },
		])
		const isMenuVisible = ref(false)

		const toggleMenu = () => {
			isMenuVisible.value = !isMenuVisible.value
		}

		return {
			links,
			isMenuVisible,
			toggleMenu,
		}
	},
}
</script>
