<template>
	<section id="products" class="w-full bg-backgroundColor px-3">
		<div class="mx-auto w-full translate-y-[150px] pt-[10px]">
			<div class="flex justify-center vsm:flex-row flex-col">
				<label
					for="selectPerSize"
					class="border-[1px] border-red bg-white px-3 py-2"
					>Liczba produktów na stronie</label
				>
				<div class="custom-select relative flex">
					<select
						id="selectPerSize"
						class="select relative w-full vsm:w-[100px] py-2 cursor-pointer border-none bg-red pl-[35px] text-white"
						@change="fetchProducts"
					>
						<option value="10">10</option>
						<option selected value="20">20</option>
						<option value="30">30</option>
						<option value="50">50</option>
					</select>
				</div>
			</div>
			<div
				class="mb-[100px] mt-[120px] flex flex-wrap justify-center gap-x-10 gap-y-10"
			>
				<div v-for="product in products" :key="product.id">
					<a
						href="#"
						data-product="product"
						class="flex h-[350px] w-[350px] items-center justify-center bg-backgroundColor2 font-bold"
						@click="showProductDetails(product, $event)"
					>
						ID: {{ product.id }}
					</a>
				</div>
			</div>
		</div>

		<div
			v-if="selectedProduct"
			data-overlay
			class="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-2 text-heading3"
		>
			<div
				class="relative h-[350px] w-full max-w-[800px] rounded-md bg-white p-3"
			>
				<button
					@click="closeProductDetails"
					autofocus
					class="absolute right-0 top-0 block p-5"
				>
					<svg
						width="16"
						height="14"
						viewBox="0 0 16 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.496547 14L6.26255 6.932L1.61255 0.948999H5.20855L8.09155 4.762L11.0055 0.948999H14.7255L9.92055 6.932L15.5005 14H11.8425L8.09155 9.133L4.21655 14H0.496547Z"
							fill="black"
						/>
					</svg>
				</button>
				<div class="flex h-full flex-col justify-between">
					<span
						>ID <span data-content="popup">{{ selectedProduct.id }}</span></span
					>
					<span
						>Nazwa:
						<span data-content="popup">{{ selectedProduct.name }}</span></span
					>
					<span
						>Wartość:
						<span data-content="popup">{{ selectedProduct.value }}</span></span
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			products: [],
			itemsPerPage: 20,
			selectedProduct: null,
			loadedProducts: 20,
		}
	},
	mounted() {
		this.fetchProducts()
		window.addEventListener("scroll", this.onScroll)
	},
	methods: {

		fetchProducts() {
			return new Promise(async (resolve, reject) => {
				try {
					const response = await axios.get(
						`https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=${this.itemsPerPage}`
					)
					this.products = response.data.data
					resolve()
				} catch (error) {
					console.error("Błąd podczas pobierania danych z API", error)
					reject(error)
				}
			})
		},

		loadMoreProducts() {
			return new Promise(async (resolve, reject) => {
				this.loadedProducts += this.itemsPerPage

				try {
					const response = await axios.get(
						`https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=${this.loadedProducts}`
					)
					this.products = response.data.data
					resolve()
				} catch (error) {
					console.error("Błąd podczas pobierania danych z API", error)
					reject(error)
				}
			})
		},
		showProductDetails(product) {
			this.selectedProduct = product
			event.preventDefault()
		},
		closeProductDetails() {
			this.selectedProduct = null
		},
		onScroll() {
			if (
				window.innerHeight + window.scrollY >=
				document.documentElement.offsetHeight
			) {
				this.loadMoreProducts()
			}
		},
	},
}
</script>

<style scoped></style>
