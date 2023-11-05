<template>
	<div>
		<div @click="toggleMenu" class="cursor-pointer menu-toggle-icon">
			<i class="bi bi-caret-left-fill"></i>
		</div>
		<transition name="menu-slide">
			<ul v-if="isMenuVisible" class="menu bg-white shadow-custom" @click.stop>
				<li v-for="link in links" :key="link.name" class="py-5 px-4">
					<a
						:href="link.link"
						class="text-base md:text-xl hover:underline"
						@click="scrollToSection(link.link)"
						>{{ link.name }}</a
					>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue"

export default {
	props: {
		links: Array,
		isMenuVisible: Boolean,
		toggleMenu: Function,
	},
	setup(props) {
		const handleClick = event => {
			if (props.isMenuVisible) {
				const menuElement = document.querySelector(".menu")
				if (menuElement && !menuElement.contains(event.target)) {
					props.toggleMenu()
				}
			}
			if (event.target.closest(".menu-toggle-icon")) {
				props.toggleMenu()
			}
		}

		const scrollToSection = sectionId => {
			const section = document.querySelector(sectionId)
			if (section) {
				window.scrollTo({
					top: section.offsetTop,
					behavior: "smooth",
				})
				props.toggleMenu()
			}
		}

		onMounted(() => {
			document.addEventListener("click", handleClick)
		})

		onBeforeUnmount(() => {
			document.removeEventListener("click", handleClick)
		})

		return {
			scrollToSection,
		}
	},
}
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
	transition: transform 0.8s;
}

.menu-slide-enter,
.menu-slide-leave-to {
	transform: translateX(100%);
}

.menu {
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 40%;
	font-family: "Lato", sans-serif;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1rem;
	z-index: 10;
}

.menu a {
	text-decoration: none;
	color: black;
	margin-bottom: 1rem;
}
.menu a:hover {
	font-weight: bold;
	color: #ab303c;
}
</style>
