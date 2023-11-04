<template>
	<section class="overflow-hidden parallax">
		<div class="mb-[20px] mt-[800px] items-center"></div>
	</section>
</template>

<script>
export default {
	name: "ParalaxComponent",
}
</script>

<style scoped>
.parallax {
	background-image: url("../images/piesek 1.png"),
		url("../images/dog-vector.webp"), url("../images/Vector_11.png");
	background-attachment: fixed, fixed, fixed;
	background-repeat: no-repeat, no-repeat, no-repeat;
	background-position: center, calc(50% - 200px) calc(60% + 80px),
		calc(50% + 300px) calc(50% + 85px);
}
</style>
