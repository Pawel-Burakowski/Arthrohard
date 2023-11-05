<template>
	<div>
		<nav
			class="fixed inset-0 z-[100] flex h-[85px] bg-white shadow-custom lg:h-[122px]"
		>
			<ul class="flex items-center px-16 uppercase w-full justify-between">
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
						<a
							:href="link.link"
							class="text-sm md:text-base hover:underline"
							:class="{
								'font-bold': link.isBold,
								active: link.link === currentSection,
							}"
							>{{ link.name }}</a
						>
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
import { ref, onMounted, onBeforeUnmount } from "vue"

export default {
	components: {
		ButtonComponent,
	},
	setup() {
		const links = ref([
			{ name: "Co nas wyróżnia", link: "#about-us" },
			{ name: "Skład", link: "#composition" },
			{ name: "Produkty", link: "#products", isBold: true },
		])
		const isMenuVisible = ref(false)

		const toggleMenu = () => {
			isMenuVisible.value = !isMenuVisible.value
		}

		const currentSection = ref("about-us")

		const handleScroll = () => {
			const sectionOffsets = {
				"#about-us": document.getElementById("about-us").offsetTop,
				"#composition": document.getElementById("composition").offsetTop,
				"#products": document.getElementById("products").offsetTop,
			}

			let newCurrentSection = "about-us"
			for (const section in sectionOffsets) {
				if (window.scrollY >= sectionOffsets[section]) {
					newCurrentSection = section
				}
			}

			if (currentSection.value !== newCurrentSection) {
				currentSection.value = newCurrentSection
			}
		}

		onMounted(() => {
			window.addEventListener("scroll", handleScroll)
		})

		onBeforeUnmount(() => {
			window.removeEventListener("scroll", handleScroll)
		})

		return {
			links,
			isMenuVisible,
			toggleMenu,
			currentSection,
		}
	},
}
</script>

<style>
.active {
	text-decoration: underline;
}
</style>
